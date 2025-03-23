const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("Cliente conectado");
});

// Envie logs para o frontend
function broadcastLog(log) {
  io.emit("newLog", log);
}
