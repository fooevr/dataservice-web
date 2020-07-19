// package: com.variflight.dataservice
// file: ChangeDesc.proto

import * as jspb from "google-protobuf";

export class ChangeDesc extends jspb.Message {
  getFieldtags(): Uint8Array | string;
  getFieldtags_asU8(): Uint8Array;
  getFieldtags_asB64(): string;
  setFieldtags(value: Uint8Array | string): void;

  getChangetags(): Uint8Array | string;
  getChangetags_asU8(): Uint8Array;
  getChangetags_asB64(): string;
  setChangetags(value: Uint8Array | string): void;

  clearFieldschangedescsList(): void;
  getFieldschangedescsList(): Array<ChangeDesc>;
  setFieldschangedescsList(value: Array<ChangeDesc>): void;
  addFieldschangedescs(value?: ChangeDesc, index?: number): ChangeDesc;

  getMapInt32Map(): jspb.Map<number, ChangeDesc>;
  clearMapInt32Map(): void;
  getMapInt64Map(): jspb.Map<number, ChangeDesc>;
  clearMapInt64Map(): void;
  getMapBoolMap(): jspb.Map<boolean, ChangeDesc>;
  clearMapBoolMap(): void;
  getMapStringMap(): jspb.Map<string, ChangeDesc>;
  clearMapStringMap(): void;
  getMapInt32RemovedMap(): jspb.Map<number, ChangeDesc>;
  clearMapInt32RemovedMap(): void;
  getMapInt64RemovedMap(): jspb.Map<number, ChangeDesc>;
  clearMapInt64RemovedMap(): void;
  getMapBoolRemovedMap(): jspb.Map<boolean, ChangeDesc>;
  clearMapBoolRemovedMap(): void;
  getMapStringRemovedMap(): jspb.Map<string, ChangeDesc>;
  clearMapStringRemovedMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeDesc.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeDesc): ChangeDesc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeDesc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeDesc;
  static deserializeBinaryFromReader(message: ChangeDesc, reader: jspb.BinaryReader): ChangeDesc;
}

export namespace ChangeDesc {
  export type AsObject = {
    fieldtags: Uint8Array | string,
    changetags: Uint8Array | string,
    fieldschangedescsList: Array<ChangeDesc.AsObject>,
    mapInt32Map: Array<[number, ChangeDesc.AsObject]>,
    mapInt64Map: Array<[number, ChangeDesc.AsObject]>,
    mapBoolMap: Array<[boolean, ChangeDesc.AsObject]>,
    mapStringMap: Array<[string, ChangeDesc.AsObject]>,
    mapInt32RemovedMap: Array<[number, ChangeDesc.AsObject]>,
    mapInt64RemovedMap: Array<[number, ChangeDesc.AsObject]>,
    mapBoolRemovedMap: Array<[boolean, ChangeDesc.AsObject]>,
    mapStringRemovedMap: Array<[string, ChangeDesc.AsObject]>,
  }
}

