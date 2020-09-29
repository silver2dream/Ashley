// package: search
// file: search.proto

import * as jspb from "google-protobuf";

export class ItemReq extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemReq.AsObject;
  static toObject(includeInstance: boolean, msg: ItemReq): ItemReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemReq;
  static deserializeBinaryFromReader(message: ItemReq, reader: jspb.BinaryReader): ItemReq;
}

export namespace ItemReq {
  export type AsObject = {
    type: number,
    location: string,
  }
}

export class ItemRes extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getType(): number;
  setType(value: number): void;

  getPrice(): string;
  setPrice(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemRes.AsObject;
  static toObject(includeInstance: boolean, msg: ItemRes): ItemRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemRes;
  static deserializeBinaryFromReader(message: ItemRes, reader: jspb.BinaryReader): ItemRes;
}

export namespace ItemRes {
  export type AsObject = {
    name: string,
    location: string,
    comment: string,
    type: number,
    price: string,
    phone: string,
  }
}

