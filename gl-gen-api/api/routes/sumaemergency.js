const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

var timeAgo = require('epoch-to-timeago').timeAgo
const emergency = require("../models/sumaemergency");

var d = new Date();
var timestamp = d.getTime();


router.post("/", (req, res, next) => {
   const data = new emergency({
    _id: new mongoose.Types.ObjectId(),
     phone: req.body.phone,
     location: req.body.location
   })
   emergency.findOne({phone: data.phone})
   .exec()
   .then((doc) => {
     if(doc){
      emergency.findOneAndUpdate({phone: req.body.phone},{ $set: {location: req.body.location} } )
      .exec().then((doc) => {console.log(doc)}).catch((err)=>{console.log(err)})
     }
     else{
      data.save().then((doc)=> {console.log(data)}).catch((err) => {console.log(err)})
     }

   })
   .catch((err) => {
     console.log(err);
   })
    res.send("ok");
  });

router.get('/:id', (req, res) => {
  emergency.findOne({phone: req.params.id})
  .exec().then((doc)=> { if(doc) {      res.status(200).json({success: true,data: doc});} else {res.send("this person doesn't have their informations")}}).catch((err) => {console.log(err)})
})

router.get('/suma', (req, res) => {
  emergency.find()
  .exec()
  .then((doc) => {
    if(doc) {
      res.status(200).json({
        success: true,
        data: doc
      });
    }
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router;
