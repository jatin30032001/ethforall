const express = require("express");
const app = express();
const lighthouse = require("@lighthouse-web3/sdk");
require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
const upload = require("./upload");
const http = require("http");
const port = process.env.PORT || 4000;
const { Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static("files"));
app.use(bodyparser.json());

const path = require("path");
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
server.listen(port, () => {
  console.log("Listening on port: ", port);
});

app.post("/uploadFiles", upload.array("files"), async (req, res) => {
  try {
    console.log("Here");
    const cids = [];
    const fileNames = req.body.fileNames;
    const apiKey = process.env.API_KEY;
    for (let i = 0; i < fileNames.length; i++) {
      const dirPath = path.join(__dirname, `uploads/${fileNames[i]}`);
      const response = await lighthouse.upload(dirPath, apiKey);
      console.log(response);
      cids.push(response.data.Hash);
    }
    console.log(cids);
    res.status(201).json({ success: true, cids: cids });
  } catch (e) {
    console.log(e);
  }
});

app.listen(5000, () => {
  console.log("Backend is running.");
});
