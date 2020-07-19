// package: com.variflight.dataservice.test
// file: TestMessage.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class student extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  hasComment(): boolean;
  clearComment(): void;
  getComment(): google_protobuf_wrappers_pb.StringValue | undefined;
  setComment(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasIvx(): boolean;
  clearIvx(): void;
  getIvx(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setIvx(value?: google_protobuf_wrappers_pb.Int32Value): void;

  getTags2Map(): jspb.Map<string, google_protobuf_wrappers_pb.Int64Value>;
  clearTags2Map(): void;
  hasS(): boolean;
  clearS(): void;
  getS(): student | undefined;
  setS(value?: student): void;

  getMsMap(): jspb.Map<number, student>;
  clearMsMap(): void;
  clearRsList(): void;
  getRsList(): Array<student>;
  setRsList(value: Array<student>): void;
  addRs(value?: student, index?: number): student;

  clearRiList(): void;
  getRiList(): Array<google_protobuf_wrappers_pb.Int64Value>;
  setRiList(value: Array<google_protobuf_wrappers_pb.Int64Value>): void;
  addRi(value?: google_protobuf_wrappers_pb.Int64Value, index?: number): google_protobuf_wrappers_pb.Int64Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): student.AsObject;
  static toObject(includeInstance: boolean, msg: student): student.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: student, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): student;
  static deserializeBinaryFromReader(message: student, reader: jspb.BinaryReader): student;
}

export namespace student {
  export type AsObject = {
    id: number,
    name: string,
    age: number,
    tagsMap: Array<[string, string]>,
    comment?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ivx?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    tags2Map: Array<[string, google_protobuf_wrappers_pb.Int64Value.AsObject]>,
    s?: student.AsObject,
    msMap: Array<[number, student.AsObject]>,
    rsList: Array<student.AsObject>,
    riList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>,
  }
}

export class exam extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCls(): string;
  setCls(value: string): void;

  getStudentid(): number;
  setStudentid(value: number): void;

  getScore(): number;
  setScore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): exam.AsObject;
  static toObject(includeInstance: boolean, msg: exam): exam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: exam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): exam;
  static deserializeBinaryFromReader(message: exam, reader: jspb.BinaryReader): exam;
}

export namespace exam {
  export type AsObject = {
    id: number,
    cls: string,
    studentid: number,
    score: number,
  }
}

export class StudentScore extends jspb.Message {
  hasS(): boolean;
  clearS(): void;
  getS(): student | undefined;
  setS(value?: student): void;

  getExamsMap(): jspb.Map<string, exam>;
  clearExamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentScore.AsObject;
  static toObject(includeInstance: boolean, msg: StudentScore): StudentScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StudentScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentScore;
  static deserializeBinaryFromReader(message: StudentScore, reader: jspb.BinaryReader): StudentScore;
}

export namespace StudentScore {
  export type AsObject = {
    s?: student.AsObject,
    examsMap: Array<[string, exam.AsObject]>,
  }
}

export class StudentScoresMap extends jspb.Message {
  getResultsMap(): jspb.Map<number, StudentScore>;
  clearResultsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentScoresMap.AsObject;
  static toObject(includeInstance: boolean, msg: StudentScoresMap): StudentScoresMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StudentScoresMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentScoresMap;
  static deserializeBinaryFromReader(message: StudentScoresMap, reader: jspb.BinaryReader): StudentScoresMap;
}

export namespace StudentScoresMap {
  export type AsObject = {
    resultsMap: Array<[number, StudentScore.AsObject]>,
  }
}

