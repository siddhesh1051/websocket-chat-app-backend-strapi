"use strict";

module.exports = {
  register() {},

  bootstrap({ strapi }) {
    process.nextTick(() => {
      // @ts-ignore
      var io = require("socket.io")(strapi.server.httpServer, {
        cors: {
          origin: [
            "http://localhost:3000",
            "https://ayna-full-stack-assignment-websocket.vercel.app/",
          ],
          methods: ["GET", "POST"],
        },
      });

      io.on("connect", async function (socket) {
        console.log("a user connected");

        socket.on("join", (group) => {
          socket.join(group);
          console.log(`User joined group: ${group}`);
        });

        socket.on("message", async function (message) {
          console.log("Received message:", message);

          // Broadcast the message to all clients in the same group
          io.to(message.group).emit("message", message);

          // Example bot response
          io.to(message.group).emit("message", {
            content: `${message.content}`,
            sender: "bot",
            group: message.group,
          });
        });

        socket.on("disconnect", () => {
          console.log("a user disconnected");
        });
      });

      strapi.io = io; // Register socket io inside strapi main object to use it globally anywhere
    });
  },
};
