import http from "http";
import WebSocketServer from "websocket";
import { routeMessageToAction } from "./app/router.js";

const server = http.createServer();
server.listen(9898);

export const wsServer = new WebSocketServer.server({
  httpServer: server,
});

wsServer.on("request", function (request) {
  const connection = request.accept(null, request.origin);
  connection.id = data.user.id;

  connection.on("message", async function (message) {
    let data = JSON.parse(message.utf8Data);
    await routeMessageToAction(data);

    // let user = { data: "user data" };
    // let result = wsServer.connections.filter((con) => con.id);
    // console.log(
    //   "User id 9 connections.......",
    //   result.length,
    //   result.map((a) => a.id),
    // );
    // console.log("Message.....", message);
    // let data = JSON.parse(message.utf8Data);
    // const json = CircularJSON.stringify(connection);
    // let connectionInfo = {
    //   user_id: 9,
    //   connection: json,
    // };
    // await connections.create(connectionInfo);
    // console.log(
    //   "Querying connection..........................................",
    // );
    // let conn = await connections.findOne({ where: { user_id: 9 }, raw: true });
    // console.log("Connection query restult..................", conn);
    // conn = CircularJSON.parse(conn.connection);
    // console.log("Started sending data............................");
    // conn.sendUTF("Force data message.. sending testing");
    // console.log("Data sent to cloient...........................");
    // let user = await users.findOne({
    //   where: { id: 9 },
    //   raw: true,
    // });

    // console.log("Open connections........", wsServer.connections);
    //   storeConnectionInfo();
    //   console.log("Connection.........", JSON.stringify(connection));
    console.log(
      "Received Message:",
      message.utf8Data,
      new Date().getMilliseconds(),
    );
    // connection.sendUTF(`New message ${JSON.stringify(user)}`);
    // wsServer.broadcastUTF(`New message ${JSON.stringify(user)}`);
  });

  connection.on("close", function (reasonCode, description) {
    // deleteConnectionInfo();
    console.log("Client has disconnected.", new Date().getMilliseconds());
  });
});
