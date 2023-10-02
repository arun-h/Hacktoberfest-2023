var express = require('express');
const nodemailer = require("nodemailer");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  sendMail(req, res);
});

const sendMail = async (req, res) => {
  let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'theo.hintz21@ethereal.email',
            pass: 'f34uUhk87rkWmAT63x'
        }
      });

  let info = await transporter.sendMail({
    from: '"CR" <vcr@gmail.com>', // sender address
    to: "aaryancl01@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hi, this is CR ?", // plain text body
    html: "<b>Hi, this is CR. Hope you are doing fine</b>", // html body
  });

  console.log("Message sent : %s", info.messageId);
  res.json(info);
}

module.exports = router;