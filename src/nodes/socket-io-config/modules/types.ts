import { Node, NodeDef } from "node-red";
import { SocketIoConfigOptions } from "../shared/types";

export interface SocketIoConfigNodeDef extends NodeDef, SocketIoConfigOptions {}

// export interface SocketIoConfigNode extends Node {}
export type SocketIoConfigNode = Node;
