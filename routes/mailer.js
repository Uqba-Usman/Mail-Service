var nodemailer = require("nodemailer");

const mailer = (data) => {
  const output = `<p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: "Name"</li>
  </ul>
  <h3>Message</h3>
  <button>Change Password</button>
  <p>${data.password}</p>`;
  const transporter = nodemailer.createTransport(
    {
      pool: true,
      service: "Gmail",
      auth: {
        type: "OAUTH2",
        user: "YOUR_EMAIL_ADDRESS",
        serviceClient: "CLIENT_ID",
        privateKey: "PRIVATE_ID",
      },
    },
    {
      from: '"MY NAME" <YOUR_EMAIL_ADDRESS>', // sender address
      to: "RECIEVER ADDRESS", // list of receivers
      subject: "Reset Password", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    }
  );

  transporter.verify((error, success) => {
    if (error) console.log(error);
    console.log("Server is ready to take message: ", success);
  });
  transporter.sendMail(data.password, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
