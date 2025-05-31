# node-red-contrib-real-socket-io-client

A [Node-RED](https://nodered.org/) node that provides a simple yet powerful Socket.IO client interface. This package allows you to create and manage `socket.io-client` connections directly from your Node-RED flows, enabling seamless real-time communication with Socket.IO servers.

## Features

* 🌐 Connect to a Socket.IO server from within Node-RED
* 📤 Emit events with custom names and payloads
* 🔌 Maintains a persistent connection using the latest `socket.io-client`
* 🔧 Simple configuration through the Node-RED editor

## Install

To install the node, navigate to your Node-RED user directory (typically `~/.node-red`) and run:

```bash
npm install node-red-contrib-real-socket-io-client
```

Then restart Node-RED:

```bash
node-red
```

Or use the Node-RED editor's **Manage Palette** feature to install the node via the UI.

## Usage

### Configuration

1. Drag the `real-socket-io-client` node into your flow.
2. Double-click to configure:

   * **Server URL** – The full Socket.IO server URL (e.g., `http://localhost:3000`)
   * Optional connection options (e.g., path)
3. In the input payload:

   * `msg.event` – Name of the event to emit (required)
   * `msg.payload` – Data to send with the event

### Example

```json
{
  "eventId": "my-custom-event",
  "payload": {
    "message": "Hello, server!"
  }
}
```

## Node Input

| Property      | Type   | Description                      |
| ------------- | ------ | -------------------------------- |
| `msg.eventId` | string | The name of the Socket.IO event  |
| `msg.payload` | any    | Data to send with the event emit |

## Compatibility

* Compatible with Socket.IO v4+
* Requires Node-RED v2.0 or later

## License

MIT

## Author

Developed and maintained by \[Your Name or Organization].
