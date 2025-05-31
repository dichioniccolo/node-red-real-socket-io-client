import { NodeInitializer } from "node-red";
import { SocketIoConfigNode, SocketIoConfigNodeDef } from "./modules/types";
import mustache from "mustache";
import { io } from "socket.io-client";

const nodeInit: NodeInitializer = (RED): void => {
  function SocketIoConfigNodeConstructor(
    this: SocketIoConfigNode,
    config: SocketIoConfigNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    const uriRaw = config.uri;
    const pathRaw = config.path || "/socket.io";

    this.uri = mustache.render(uriRaw, process.env);
    this.path = mustache.render(pathRaw, process.env);

    this.socket = io(this.uri, {
      path: this.path,
      transports: ["websocket"],
      autoConnect: false,
    });

    this.on("close", () => {
      this.socket.disconnect();
    });

    this.socket.connect();

    // this.context().global.set("socketIoConfigNodeId", this.id);
  }

  RED.nodes.registerType("socket-io-config", SocketIoConfigNodeConstructor);
};

export = nodeInit;
