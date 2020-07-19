// package: com.variflight.dataservice
// file: Proto.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ProtoDesc extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getFilesMap(): jspb.Map<string, Uint8Array | string>;
  clearFilesMap(): void;
  hasNocacheprefix(): boolean;
  clearNocacheprefix(): void;
  getNocacheprefix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNocacheprefix(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasFullcacheprefix(): boolean;
  clearFullcacheprefix(): void;
  getFullcacheprefix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFullcacheprefix(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasIncrementcacheprefix(): boolean;
  clearIncrementcacheprefix(): void;
  getIncrementcacheprefix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIncrementcacheprefix(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDefaultttl(): boolean;
  clearDefaultttl(): void;
  getDefaultttl(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDefaultttl(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasDefaultmaxversion(): boolean;
  clearDefaultmaxversion(): void;
  getDefaultmaxversion(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setDefaultmaxversion(value?: google_protobuf_wrappers_pb.Int32Value): void;

  getRpcttlsMap(): jspb.Map<string, number>;
  clearRpcttlsMap(): void;
  getRpcmaxversionsMap(): jspb.Map<string, number>;
  clearRpcmaxversionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtoDesc.AsObject;
  static toObject(includeInstance: boolean, msg: ProtoDesc): ProtoDesc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtoDesc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtoDesc;
  static deserializeBinaryFromReader(message: ProtoDesc, reader: jspb.BinaryReader): ProtoDesc;
}

export namespace ProtoDesc {
  export type AsObject = {
    version: string,
    filesMap: Array<[string, Uint8Array | string]>,
    nocacheprefix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    fullcacheprefix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    incrementcacheprefix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    defaultttl?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    defaultmaxversion?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    rpcttlsMap: Array<[string, number]>,
    rpcmaxversionsMap: Array<[string, number]>,
  }
}

