import { io } from "socket.io-client";

class SocketioService {
  static socketInst;
  static sessionId;

  constructor() {
    this.socket = null;
    if (!SocketioService.socketInst) {
      SocketioService.socketInst = this;
    }
    return SocketioService.socketInst;
  }

  setupSocketConnection(cb) {
    this.socket = io("http://localhost:3001", {
      // auth: {
      //   token: ''
      // },
      // query: {
      //   x: 42
      // },
      // extraHeaders: {
      //   "my-custom-header": "1234"
      // },
      transports: ["websocket"],
      upgrade: false,
    });
    this.socket.on("connect", () => {
      // console.log(this.socket.connected); // true
      // console.log("Connected to socket.io server", process.env.VUE_APP_SOCKET_ENDPOINT);
    //   cb("Connected");
    });

    this.socket.on("connect_error", () => {
      // Write any connection errors to the console
      console.error("Error connecting socket");
    //   cb("Error in connection");
    });

    this.socket.on("session_confirm", (remoteId) => {
      SocketioService.sessionId = remoteId;

      const userData = {};

      const initPayload = {
        message: "my user information are ",
        session_id: remoteId,
        metadata: userData,
      };

      this.socket.emit("user_uttered", initPayload);
    });
    this.socket.emit("session_request", { session_id: this.socket.id });
  }

  subscribe(eventName, fn) {
    this.socket.on(eventName, (data) => {
      // console.log(' Received event and thread : 1 : ', eventName, data);
      fn(data);
    });
  }

  socketEmit(eventName, userThreadData) {
    // this.socket.auth.token = data.message;
    // this.socket.disconnect().connect();
    // userThreadData.session_id = SocketioService.sessionId;

    this.socket.emit(eventName, {
      ...userThreadData,
    });

  }

  disconnect() {
    if (this.socket) {
      console.log("connection disconnected");
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
