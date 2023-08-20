//imports
import express from 'express'
import http from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from 'cors';

//Controllers
import { userRouter } from "./controllers/userController.js";

const PORT = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/api/v1/user", userRouter);

// Websocket connection
const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("connectionRequest", (userData) => {
    socket.join(userData.id);
    socket.emit("connected", true);
  });

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log("user joined room", room);
  });

});
 


server.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}...`);
});
