const nodemailer = require("nodemailer");
const { mailModel } = require("./mailModel");

const sendEmail = async (email, subject, variant, link, firstName, lastName) => {
  try {
    let transporter = nodemailer.createTransport({
      // service: process.env.SERVICE,
      // auth: {
      //   user: process.env.USER,
      //   pass: process.env.PASS,
      // },
      // tls: {
      //   rejectUnauthorized: false,
      // },
      host: process.env.HOST,
      port: process.env.PORT_SMTP,
      secure: process.env.SECURE === "true", // use TLS
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      html: mailModel(variant, link, firstName, lastName),
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    throw "Email n'est pas envoyé";
  }
};

const verifyTransporter = () => {
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT_SMTP,
    secure: process.env.SECURE === "true", // use TLS
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready for messages");
    }
  });
};

module.exports = { sendEmail, verifyTransporter };
