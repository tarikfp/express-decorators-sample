import "reflect-metadata";
import { Methods, MetadataKeys } from "./enums";
import { RequestHandler } from "express";

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

export function routeBinder(method: string) {
  return function (path: string) {
    return function (
      target: any,
      key: string,
      descriptor: RouteHandlerDescriptor
    ) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const patch = routeBinder(Methods.patch);
export const _delete = routeBinder(Methods.delete);
