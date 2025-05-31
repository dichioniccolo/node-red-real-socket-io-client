import { EditorNodeProperties } from "node-red";
import { SocketIoOutOptions } from "../../shared/types";

export interface SocketIoOutEditorNodeProperties
  extends EditorNodeProperties,
    SocketIoOutOptions {}
