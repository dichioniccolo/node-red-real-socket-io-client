import { EditorNodeProperties } from "node-red";
import { SocketIoConfigOptions } from "../../shared/types";

export interface SocketIoConfigEditorNodeProperties
  extends EditorNodeProperties,
    SocketIoConfigOptions {}
