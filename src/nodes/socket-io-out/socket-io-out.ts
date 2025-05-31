import { NodeInitializer } from "node-red";
import { SocketIoOutNode, SocketIoOutNodeDef } from "./modules/types";
import { SocketIoConfigNode } from "../socket-io-config/modules/types";

const nodeInit: NodeInitializer = (RED): void => {
  function SocketIoOutNodeConstructor(
    this: SocketIoOutNode,
    config: SocketIoOutNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    this.eventId = config.eventId;

    this.config = RED.nodes.getNode(config.config) as SocketIoConfigNode;

    this.config.socket.on("connect", () => {
      this.status({ fill: "green", shape: "dot", text: "Connected" });
    });

    this.config.socket.on("reconnect_attempt", () => {
      this.status({ fill: "yellow", shape: "ring", text: "Reconnecting..." });
    });

    this.config.socket.on("connect_error", () => {
      this.status({ fill: "red", shape: "ring", text: "Connection Error" });
    });

    this.config.socket.on("disconnect", () => {
      this.status({ fill: "red", shape: "ring", text: "Disconnected" });
    });

    this.on("input", (msg, _, done) => {
      const eventId = this.eventId || msg.eventId;

      if (!eventId || typeof eventId !== "string") {
        this.error("Event ID is required");
        done();
        return;
      }

      this.config.socket.emit(eventId, msg.payload);
      done();
    });
  }

  RED.nodes.registerType("socket-io-out", SocketIoOutNodeConstructor);
};

export = nodeInit;
