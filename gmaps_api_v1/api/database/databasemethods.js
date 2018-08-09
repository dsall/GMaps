const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


mongoose.connect(
    "mongodb+srv://dsall:oftHLBZQfkUK24Oz@test-rbyf3.mongodb.net/gmaps_users",
  );


const address = require("../models/AddAddress");
const id = '5b5adb12efae0f03e0e9a439';
const id2 =  '5b5adcd7efae0f03e0e9a43b';

const phone = "+15136958052" ;

var hash = bcrypt.hashSync("+15136958052", 10);
const getUser_Address = (phone) => {
    address.find({phone: phone})
    .select('Home_Address private')
    .exec()
    .then(doc => {
        console.log(doc.length);
        if(doc.private){
            console.log('This is a private address, please ask the person to make it public or send you their address' );
        }
        else{
            console.log(doc);
        }
    })
    .catch(err => {
        console.log('There is an error, please try again');
    })
    
}



getUser_Address(phone);
// getUser_Address(id2);

console.log(hash);


bcrypt.compare("+15136958052", "$2b$10$HC0L.0uXJoEag0va6V7kW.actq231RFCvfYPmHC/wdWKyk7/xOdla").then(function(res) {
    console.log(true);
});