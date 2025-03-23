const axios = require("axios");

const sendTeamsNotification = async (message) => {
  const webhookUrl = "https://outlook.office.com/webhook/SEU_WEBHOOK";
  await axios.post(webhookUrl, { text: message });
};

module.exports = { sendTeamsNotification };
