import { EditorRED } from "node-red";
import { SocketIoOutEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<SocketIoOutEditorNodeProperties>("socket-io-out", {
  category: "SocketIO",
  color: "#a6bbcf",
  defaults: {
    config: {
      type: "socket-io-config",
      required: true,
      value: "",
    },
    eventId: {
      required: false,
      value: "",
    },
  },
  inputs: 1,
  icon: "send.png",
  paletteLabel: "socket io out",
  label: function () {
    return this.name || this.eventId || "socket io out";
  },
});
