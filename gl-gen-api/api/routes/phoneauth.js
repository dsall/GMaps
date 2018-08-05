const express = require("express");
const router = express.Router();

const SendLoginPin = require('../sms/sms');
const VerifyToLogIn = require('../sms/login');

router.post("/", (req, res, next) => {
  SendLogInVerification(req.body.phone);
  res.status(201).json({
      success: true,
      message: "PIN sent to your phone number"
  }).catch(err => {
    console.log(error);
  })
});



module.exports = router;