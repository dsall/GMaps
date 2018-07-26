const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// https://www.clickatell.com/developers/platform/tutorials/

// https://developer.twitter.com/
var request = require('request');

request.post('https://textbelt.com/text', {
  form: {
    phone: '15134490428',
    message: 'Hello world',
    key: 'textbelt',
  },
}, function(err, httpResponse, body) {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(JSON.parse(body));
})

 router.post("/", (req, res, next) => {
   res.send('SignInPage')
 });



module.exports = router;