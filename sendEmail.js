const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendAlert = async (email, subject, message) => {
  const msg = {
    to: email,
    from: "alertas@admino365.com",
    subject: subject,
    text: message,
  };
  await sgMail.send(msg);
};

module.exports = { sendAlert };
