// package: com.variflight.dataservice.test
// file: TT.proto

import * as TT_pb from "./TT_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TTunary = {
  readonly methodName: string;
  readonly service: typeof TT;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof TT_pb.Request;
  readonly responseType: typeof TT_pb.Response;
};

type TTclientStream = {
  readonly methodName: string;
  readonly service: typeof TT;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof TT_pb.Request;
  readonly responseType: typeof TT_pb.Response;
};

type TTserverStream = {
  readonly methodName: string;
  readonly service: typeof TT;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof TT_pb.Request;
  readonly responseType: typeof TT_pb.Response;
};

type TTbothStream = {
  readonly methodName: string;
  readonly service: typeof TT;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof TT_pb.Request;
  readonly responseType: typeof TT_pb.Response;
};

export class TT {
  static readonly serviceName: string;
  static readonly unary: TTunary;
  static readonly clientStream: TTclientStream;
  static readonly serverStream: TTserverStream;
  static readonly bothStream: TTbothStream;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TTClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  unary(
    requestMessage: TT_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: TT_pb.Response|null) => void
  ): UnaryResponse;
  unary(
    requestMessage: TT_pb.Request,
    callback: (error: ServiceError|null, responseMessage: TT_pb.Response|null) => void
  ): UnaryResponse;
  clientStream(metadata?: grpc.Metadata): RequestStream<TT_pb.Request>;
  serverStream(requestMessage: TT_pb.Request, metadata?: grpc.Metadata): ResponseStream<TT_pb.Response>;
  bothStream(metadata?: grpc.Metadata): BidirectionalStream<TT_pb.Request, TT_pb.Response>;
}

