const fs = require("fs");

function logEvent(event, details) {
  const log = `[${new Date().toISOString()}] Evento: ${event}, Detalhes: ${JSON.stringify(details)}\n`;
  fs.appendFileSync("logs/audit.log", log); // Armazena o log localmente
}

module.exports = { logEvent };
