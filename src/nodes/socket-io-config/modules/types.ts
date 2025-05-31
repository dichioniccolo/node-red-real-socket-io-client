import { Node, NodeDef } from "node-red";
import { SocketIoConfigOptions } from "../shared/types";
import { Socket } from "socket.io-client";

export interface SocketIoConfigNodeDef extends NodeDef, SocketIoConfigOptions {}

// export interface SocketIoConfigNode extends Node {}
export type SocketIoConfigNode = Node &
  SocketIoConfigOptions & {
    socket: Socket;
  };
