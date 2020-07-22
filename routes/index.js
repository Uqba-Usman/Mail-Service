var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const mailer = require("./mailer");
// var key = require("./key.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/send", (req, res) => {
  const data = { to_email: "uqbamehar312@gmail.com", password: "123456" };
  mailer(data);
  return res.redirect("/");
});

module.exports = router;
