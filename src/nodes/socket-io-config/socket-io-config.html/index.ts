import { EditorRED } from "node-red";
import { SocketIoConfigEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<SocketIoConfigEditorNodeProperties>("socket-io-config", {
  category: "config",
  color: "#a6bbcf",
  defaults: {
    uri: {
      required: true,
      value: "ws://localhost:4100",
    },
    path: {
      required: false,
      value: "/socket.io/",
    },
  },
  icon: "network.png",
  paletteLabel: "socket io config",
  label: function () {
    return this.name || `${this.uri}${this.path}` || "socket io config";
  },
});
