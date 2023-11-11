import net from "node:net";
import dotenv from "dotenv";
import { m1, m2 } from "./controllers.js";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

const processRequest = (request) => {
  // request -> dato parseado (array)
  // ["", 1, 2]
  const r = request;
  const module = request[0];

  switch (module) {
    case "m1":
      return m1(Number(r[1]), Number(r[2]));
    case "m2":
      return m2(Number(r[1]));
  }
};

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
