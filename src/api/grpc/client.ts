import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import {
  AuthServiceClient,
  IAuthServiceClient,
} from "../../../pb/auth/auth.client";
import { authInterceptor } from "./auth-interceptor";

let webTransport: GrpcWebFetchTransport | null = null;
let authClient: IAuthServiceClient | null = null; // singleton client

const getWebTransport = () => {
  if (webTransport === null) {
    webTransport = new GrpcWebFetchTransport({
      baseUrl: "http://localhost:8080",
      interceptors: [authInterceptor],
    });
  }

  return webTransport;
};

export const getAuthClient = () => {
  if (authClient === null) {
    authClient = new AuthServiceClient(getWebTransport());
  }
  return authClient;
};
