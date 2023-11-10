import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
  port: process.env.PORT,
  host: process.env.HOST,
};

const clientTCP = net.connect(options);

clientTCP.on("connect", () => {
  console.log("Client connected :)");
});

clientTCP.on("close", () => {
  console.log("Client disconnected :(");
});
