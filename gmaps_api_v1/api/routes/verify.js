const express = require("express");
const router = express.Router();

const Verification = require('../sms/login');


router.post("/", async (req, res, next) => {
  
  try {
    const user =  await VerifyToLogIn(req.body.phone, req.body.pin)
    console.log(user);
    res.json(user);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
});


module.exports = router;