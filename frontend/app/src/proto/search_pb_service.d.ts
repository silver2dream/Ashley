// package: search
// file: search.proto

import * as search_pb from "./search_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SearchServiceSearch = {
  readonly methodName: string;
  readonly service: typeof SearchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof search_pb.ItemReq;
  readonly responseType: typeof search_pb.ItemRes;
};

export class SearchService {
  static readonly serviceName: string;
  static readonly Search: SearchServiceSearch;
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

export class SearchServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  search(
    requestMessage: search_pb.ItemReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: search_pb.ItemRes|null) => void
  ): UnaryResponse;
  search(
    requestMessage: search_pb.ItemReq,
    callback: (error: ServiceError|null, responseMessage: search_pb.ItemRes|null) => void
  ): UnaryResponse;
}

