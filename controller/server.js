import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
  socket.on("connect", () => {
    console.log("Client connected :)");
  });

  socket.on("close", () => {
    console.log("Client disconnected :(");
  });
});

serverTCP.listen(port, () => {
  console.log("Connection sucessfull :)");
});
