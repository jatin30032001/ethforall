const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 4000;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("New id: ", socket.id);
  socket.on("sendd", (data) => {
    console.log(data);
    socket.broadcast.emit("streaming", data);
  });
});
app.get("/", (req, res) => {});

server.listen(port, () => {
  console.log("Listening on port: ", port);
});
