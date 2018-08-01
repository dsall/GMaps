const express = require("express");
const router = express.Router();

const Verification = require('../sms/login');

router.post("/", (req, res, next) => {
var data = VerifyToLogIn(req.body.phone, req.body.pin);
  res.status(200).send(JSON.stringify(data));
  
});


module.exports = router;