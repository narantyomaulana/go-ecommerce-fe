import { RpcInterceptor } from "@protobuf-ts/runtime-rpc";

export const authInterceptor: RpcInterceptor = {
  interceptUnary(next, method, input, options) {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      options.meta = {
        ...options.meta,
        authorization: `Bearer ${accessToken}`,
      };
    }
    return next(method, input, options);
  },
};
