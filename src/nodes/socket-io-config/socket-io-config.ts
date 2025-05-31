import { NodeInitializer } from "node-red";
import { SocketIoConfigNode, SocketIoConfigNodeDef } from "./modules/types";

const nodeInit: NodeInitializer = (RED): void => {
  function SocketIoConfigNodeConstructor(
    this: SocketIoConfigNode,
    config: SocketIoConfigNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    this.on("input", (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType("socket-io-config", SocketIoConfigNodeConstructor);
};

export = nodeInit;
