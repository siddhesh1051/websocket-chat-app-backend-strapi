// module.exports = async () => {
//   process.nextTick(() => {
//     // @ts-ignore
//     var io = require("socket.io")(strapi.server);
//     io.on("connection", async function (socket) {
//       console.log(`a user connected`);
//       // send message on user connection
//       socket.emit("message", JSON.stringify({ message: "Hello" }));

//       // listen for user diconnect
//       socket.on("disconnect", () => {
//         console.log("a user disconnected");
//       });
//     });
//     // @ts-ignore
//     strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
//   });
// };
