import {RPCImpl, Method, rpc, Type, Field, MapField, FieldBase} from "protobufjs";
import { grpc } from '@improbable-eng/grpc-web';
import * as jspb from "google-protobuf";
import * as pj from "protobufjs";
import {com} from "./ds";
import ChangeDesc = com.variflight.dataservice.ChangeDesc;
import IChangeDesc = com.variflight.dataservice.IChangeDesc;

enum ChangeType{
    Unchanged = 0b00000000,
    Created = 0b01000000,
    Updated = 0b10000000,
    Deleted = 0b11000000,
}

export class ServiceCaller {
    private readonly host: string;
    private readonly serviceName: string;
    private readonly proto: pj.Root;
    constructor(host: string, proto: pj.Root, serviceName: string) {
        this.host = host;
        this.serviceName = serviceName;
        this.proto = proto;
    }

    loop<TRequest, TResponse extends pj.Message<{}>>(
        method: ((req:TRequest, callback:(err:(Error|null), resp?:TResponse)=>void)=>void)|((req:TRequest)=>Promise<TResponse>),
        getParameter: () => TRequest,
        defaultTS: number = 0,
        daoUpdated: (newDao: (TResponse | undefined)) => void,
        defaultDAO?: TResponse,
        tsUpdated?: (ts: number) => void,
        interval: number = 3000): () => void {

        let keep = true;
        let dao = defaultDAO;
        let ts = defaultTS;
        const methodDesc = this.proto.lookupService(this.serviceName).methods[method.name];
        methodDesc.resolve();

        const call = function (host: string, proto: pj.Root, serviceName: string) {
            if (!keep) {
                return;
            }
            const param = getParameter();
            
            class bridge extends jspb.Message {
                resultBts: Uint8Array | undefined;
                serializeBinary(): Uint8Array {
                    return methodDesc.resolvedRequestType?.encode(param).finish()!!;
                }
                toObject(includeInstance?: boolean | undefined): {} {
                    throw new Error("Method not implemented.");
                }
                static deserializeBinary(bts: Uint8Array): bridge {
                    const result = new bridge();
                    result.resultBts = bts;
                    return result;
                }
            }
            grpc.unary({
                requestStream: false,
                responseStream: false,
                methodName: method.name,
                service: { serviceName: serviceName },
                requestType: bridge,
                responseType: bridge
            }, {
                transport: grpc.WebsocketTransport(),
                host: host,
                request: new bridge(),
                metadata: { ts:  ts.toString()},
                onEnd: function (resp) {
                    const tsHeader = resp.headers.get("ts");
                    const ctbinHeader = resp.headers.get("ct-bin");
                    const cdbinHeader = resp.headers.get("cd-bin");
                    if(tsHeader.length == 1 || ctbinHeader.length == 1){
                        const ct = Uint8Array.from(atob(ctbinHeader[0]), c => c.charCodeAt(0))[0];
                        if (ct == ChangeType.Created){
                            dao = methodDesc.resolvedResponseType?.decode((resp.message as bridge).resultBts!!) as TResponse;
                            daoUpdated(dao);
                        }else if (ct == ChangeType.Updated){
                            const cdBts = Uint8Array.from(atob(cdbinHeader[0]), c => c.charCodeAt(0));
                            const cd = ChangeDesc.decode(cdBts);
                            const updateData = methodDesc.resolvedResponseType?.decode((resp.message as bridge).resultBts!!) as TResponse;
                            if(dao){
                                mergeMessage(updateData, dao, methodDesc.resolvedResponseType!, cd);
                                console.log("updated ", dao, "cd len", cdBts.length);
                            }else{
                                console.error("receive update message. but current dao value is undefined.");
                            }
                        }else if (ct == ChangeType.Deleted){
                            dao = undefined;
                            daoUpdated(dao);
                        }
                        ts = parseInt(tsHeader[0]) ?? 0;
                        if(tsUpdated) {
                            tsUpdated(ts);
                        }
                    }
                    setTimeout(function(){
                        call(host, proto, serviceName);
                    }, interval);
                }
            })
        }
        call(this.host, this.proto, this.serviceName);
        return function () {
            keep = false;
        }
    }

    once() {

    }
}

function mergeMessage<TType extends pj.Message<{}>>(sourceDAO:TType, targetDAO:TType, typeDesc:Type, cd:ChangeDesc){
    const fields = typeDesc.fieldsArray.sort((f1:Field, f2: Field):number=>{
        if(f1.id == f2.id){
            return 0;
        }
        return f1.id > f2.id ? 1 : -1;
    });
    for(let i = 0; i < fields.length; i++){
        const field = fields[i];
        if (field.name === "pricesMap"){
        }
        const fieldTag = cd.fieldTags[Math.floor( i / 4)] >> (6 - (i % 4) * 2) << 6 & 0b11000000;
        if(fieldTag == ChangeType.Created){
            // @ts-ignore
            targetDAO[field.name] = sourceDAO[field.name];
        }else if (fieldTag == ChangeType.Updated){
            let cdIndex = 0
            for(let j = 0; j < i; j++){
                if ((cd.changeTags[Math.floor(j / 8)] >> (7 - j % 8) << 7 & 0b10000000) == 0b10000000){
                    cdIndex++
                }
            }
            if(field.map) {
                // @ts-ignore
                mergeMap(sourceDAO[field.name], targetDAO[field.name], field as FieldBase as MapField, cd.fieldsChangeDescs[cdIndex])
            }else if(field.repeated){
                // @ts-ignore
                targetDAO[field.name] = sourceDAO[field.name];
            }else if(field.resolvedType != null){
                // @ts-ignore
                mergeMessage(sourceDAO[field.name], targetDAO[field.name], field.resolvedType, cd.fieldsChangeDescs[cdIndex] as ChangeDesc)
            }else if(field){
                // @ts-ignore
                targetDAO[field.name] = sourceDAO[field.name];
            }
        }else if (fieldTag == ChangeType.Deleted){
            // @ts-ignore
            targetDAO[field.name] = field.defaultValue
        }
    }
}

function mergeMap<TRequest extends pj.Message<{}>>(sourceDAO: Map<any, any>, targetDAO: Map<any, any>, field:MapField, cd: ChangeDesc){
    field.resolve()
    let createOrUpdatedMapDesc: { [k: string]: IChangeDesc }
    let removedMapDesc: { [k: string]: IChangeDesc }
    if (field.keyType === "string"){
        createOrUpdatedMapDesc = cd.mapString
        removedMapDesc = cd.mapStringRemoved
    }else if (field.keyType === "int32"){
        createOrUpdatedMapDesc = cd.mapInt32
        removedMapDesc = cd.mapInt32Removed
    }else if(field.keyType === "int64"){
        createOrUpdatedMapDesc = cd.mapInt64
        removedMapDesc = cd.mapInt64Removed
    }else if(field.keyType === "boolean"){
        createOrUpdatedMapDesc = cd.mapBool
        removedMapDesc = cd.mapBoolRemoved
    }
    for(const key in removedMapDesc!){
        // @ts-ignore
        delete targetDAO[key]
    }
    for(const key in createOrUpdatedMapDesc!){
        if(key in targetDAO){
            if (!field.resolvedType || field.resolvedType instanceof pj.Enum){
                // @ts-ignore
                targetDAO[key] = sourceDAO[key]
            }else{
                // @ts-ignore
                mergeMessage(sourceDAO[key], targetDAO[key], field.resolvedType, createOrUpdatedMapDesc[key] as ChangeDesc)
            }
        }else{
            // @ts-ignore
            targetDAO[key] = sourceDAO[key]
        }
    }
}


//pbjs -t static-module -w commonjs src/proto/*.proto -o src/scripts/proto/proto.js
//pbts src/scripts/proto/proto.js -o src/scripts/proto/proto.d.ts
//pbjs -t proto3 src/proto/*.proto -o public/main.proto