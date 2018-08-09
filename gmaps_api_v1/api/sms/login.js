const mongoose = require("mongoose");
const uuidV1 = require('uuid');
var t = new Date();

/*

Get pin from http post and then see if PIN matches 
before responding with a success and the  new uid that needs to be 
stored in the person's fon for authentication 
need to work on synchronisation. Getting old data when i send something back

*/

const LoginPin = require("../models/loginverification");
const LoginToken = require("../models/loginandtoken");


var TimeStamp = (`${t.getHours()}:${t.getMinutes()} ${t.getDay()}/${t.getMonth()}/${t.getFullYear()}`);


var message = {success: '', uid: '', phone:''};

const createuuid = () =>{
    return uuidV1();
}


CreateToken = async (phonenumber,  uid, TimeStamp) => {
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


VerifyToLogIn = async (phonenumber, pin_received) => {
    try{
    var uid = createuuid();
     await (LoginPin.find({phone: phonenumber})
    .select('pin')
    .exec()
    .then(doc => {
    if(doc[0].pin === pin_received){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        CreateToken(phonenumber, uid, TimeStamp);
        message = {success: true, uidtoken: uid, phone:true};
        // console.log(message);
    } 
    else{
        message = {success: false, uidtoken: "", phone:true};
        //  console.log(message);
        //  console.log('Wrong pin submitted');
    }  
    }).catch(err => {console.log('error')}))
    return message;
    
   } catch(err){
       message = {success: false, uidtoken: "", phone:false};
       return message;
       console.log(error);
   }

}
