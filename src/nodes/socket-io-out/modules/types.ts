import { Node, NodeDef } from "node-red";
import { SocketIoOutOptions } from "../shared/types";
import { SocketIoConfigNode } from "src/nodes/socket-io-config/modules/types";

export interface SocketIoOutNodeDef extends NodeDef, SocketIoOutOptions {}

// export interface SocketIoOutNode extends Node {}
export type SocketIoOutNode = Node & {
  eventId: string;
  config: SocketIoConfigNode;
};
