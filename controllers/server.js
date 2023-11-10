import net from "node:net";
import dotenv from "dotenv";
import { m1 } from "./controllers";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

const processRequest = (request) => {};

serverTCP.on("connection", (socket) => {
  socket.on("close", () => {
    console.log("Client disconnected :(");
  });

  socket.on("data", (bufferDataClient) => {
    const data = JSON.parse(bufferDataClient.toString());
    const response = processRequest(data);
    socket.write(JSON.stringify(response));
  });

  console.log("Client connected :)");
});

serverTCP.listen(port, () => {
  console.log("Connection sucessfull :)");
});
