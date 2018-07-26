const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");



mongoose.connect(
    "mongodb+srv://dsall:oftHLBZQfkUK24Oz@test-rbyf3.mongodb.net/gmaps_users",
  );


const address = require("../models/AddAddress");
const id = '5b5978fe37710219c038ba88';
const id2 =  '5b5963c99037cf19a8d70b8a';

const getUser_Address = (id) => {
    address.findById(id)
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

getUser_Address(id);
getUser_Address(id2);