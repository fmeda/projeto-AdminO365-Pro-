const pdf = require("pdfkit");

function generateReport(data, res) {
  const doc = new pdf();
  res.setHeader("Content-Type", "application/pdf");
  doc.pipe(res);

  doc.fontSize(16).text("Relatório de Atividades", { align: "center" });
  data.forEach((item) => {
    doc
      .fontSize(12)
      .text(`Evento: ${item.event}, Detalhes: ${JSON.stringify(item.details)}`);
  });

  doc.end();
}

module.exports = { generateReport };
