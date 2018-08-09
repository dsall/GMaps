const mongoose = require("mongoose");
var t = new Date();
const accountSid = 'ACc836ff2b1d431b69fac3807561d6f058';
const authToken = 'f27c3cd9dabb04e9af30bbf63a1e26c6';

const client = require('twilio')(accountSid, authToken);

const LoginPin = require("../models/loginverification");
var otpGenerator = require('otp-generator');


/*

When an sms arrives to the server, we check if the phone number is in the server. 
if we have the phone number in the server, we update the new pin and the timestamp. 
Otherwise we store add the information in our LoginPin database
need to work on bcrypt

*/


SendLogInVerification = (phonenumber) => {
  var Pin = otpGenerator.generate(4, { alphabets: false, upperCase: false, specialChars: false });
  var TimeStamp = (`${t.getHours()}:${t.getMinutes()} ${t.getDay()}/${t.getMonth()}/${t.getFullYear()}`);
  client.messages
  .create({from: '+18645712323',
           body: `Your GMaps verification code is: ${Pin}. Please enter it in the app pin field in order to verify your account.`, 
           to: phonenumber})
  .then(message => {
    const logandpin = new LoginPin({
      _id: new mongoose.Types.ObjectId(),
      phone: phonenumber,
      pin: Pin,
      time: TimeStamp,
    });
    if(LoginPin.find({phone: phonenumber})){
      LoginPin.update({phone: phonenumber}, {$set: {pin: Pin, time: TimeStamp}})
      .exec()
      .then(console.log('this phone already existe and data updated'))
    }
    else{
      logandpin
      .save()
      .then(result => console.log('worked'))
      .catch(err => {
      console.log(err);
      })
    }
}).catch(error =>{
  console.log(error);
})}



/*

This is the sms flow for ThirdParty access verification 

*/
ThirdPartyVerification = (phonenumber, marchand) => {
  var Pin = otpGenerator.generate(4, { alphabets: false, upperCase: false, specialChars: false });
  client.messages
  .create({ from: '+18645712323', 
            body: `Use this pin: ${Pin} in order to authorize ${marchand} to access your information. If you didn't make this request, please disregard this message.`, 
            to: phonenumber})
  .then(message => console.log(message.sid, Pin));
} 

module.exports = SendLogInVerification;
