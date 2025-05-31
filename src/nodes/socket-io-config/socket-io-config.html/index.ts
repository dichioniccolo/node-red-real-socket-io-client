import { EditorRED } from "node-red";
import { SocketIoConfigEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<SocketIoConfigEditorNodeProperties>("socket-io-config", {
  category: "function",
  color: "#a6bbcf",
  defaults: {
    name: { value: "" },
  },
  inputs: 1,
  outputs: 1,
  icon: "file.png",
  paletteLabel: "socket io config",
  label: function () {
    return this.name || "socket io config";
  },
});
