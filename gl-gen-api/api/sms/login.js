const mongoose = require("mongoose");

var t = new Date();

/*

Get pin from http post and then see if PIN matches 
before responding with a success and the  new uid that needs to be 
stored in the person's fon for authentication 
need to work on synchronisation. Getting old data when i send something back

*/

const LoginPin = require("../models/loginverification");
const LoginToken = require("../models/loginandtoken");


const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator(); // Default is a 128-bit UID encoded in base58


var TimeStamp = (`${t.getHours()}:${t.getMinutes()} ${t.getDay()}/${t.getMonth()}/${t.getFullYear()}`);

var uid = uidgen.generateSync();
var message = {success: '', uid: ''};

CreateToken = (phonenumber, uid, TimeStamp) => {
    const savenewuid = new LoginToken({
        _id: new mongoose.Types.ObjectId(),
        phone: phonenumber,
        uid: uid,
        time: TimeStamp,
      });
      if(LoginToken.find({phone: phonenumber})){
        LoginToken.update({phone: phonenumber}, {$set: {uid: uid, time: TimeStamp}})
        .exec()
        .then()
      }
      else{
        savenewuid
        .save()
        .then(result => console.log(result))
        .catch(err => {
        console.log(err);
        })
      }
}

VerifyToLogIn = (phonenumber, pin_received) => {
    LoginPin.find({phone: phonenumber})
    .select('pin')
    .exec()
    .then(doc => {
    if(doc[0].pin === pin_received){
        
        CreateToken(phonenumber, uid, TimeStamp);
        message = {success: true, uidtoken: uid};
        // console.log(message);
      
    } 
    else{
        message = {success: false, uidtoken: ""};
        // console.log(message);
        // console.log('Wrong pin submitted');
    }  
    }).catch(err => {console.log('error')})
    return message;
    
}

