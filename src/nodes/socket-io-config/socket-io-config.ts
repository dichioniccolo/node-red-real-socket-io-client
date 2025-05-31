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

    const parsedConfig = mustache.render(JSON.stringify(config), process.env);

    config = JSON.parse(parsedConfig) as SocketIoConfigNodeDef;

    this.uri = config.uri;
    this.path = config.path || "/socket.io";

    this.socket = io(this.uri, {
      path: this.path,
      transports: ["websocket"],
    });

    this.on("close", () => {
      this.socket.disconnect();
    });

    this.context().global.set("socketIoConfigNodeId", this.id);
  }

  RED.nodes.registerType("socket-io-config", SocketIoConfigNodeConstructor);
};

export = nodeInit;
