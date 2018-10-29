const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//CLQQSWow1x7rHxeo
const Users_Addresses = require("../models/AddAddress");


/* The post methode is used to add data in the database - 
  need to add token for authorizing who can add something in the database
  same need to be done for patching and deleting for security purposes
  also need to make the database method functions better so that they 
  handle all complexity 
  need to talk to Mohamed Berete for suggestions 
  
*/

router.post("/", (req, res, next) => {
  const addeddata = new Users_Addresses({
    _id: new mongoose.Types.ObjectId(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    Home_Address: req.body.Home_Address,
    Work_Address: req.body.Work_Address,
    private: req.body.private, 

  });
  console.log(addeddata);
  addeddata
    .save()
    .then(result => {
      res.status(201).json({
        message: "Your address have been added into the database",
        AddedAddress: result,
      });
    })
    .catch(err => {
      //console.log(err);
      res.status(500).json({

        error: err
      });
    });
});



router.get("/:Id", (req, res, next) => {
  const id = req.params.Id;
  Users_Addresses.findById(id)
    .select('Home_Address Work_Address private')
    .exec()
    .then(doc => {    
      //If the address is private we send the person a response saying that it's private  
      if(doc.private){
        res.status(200).json({
          Response: 'private',
          info: 'please contact the person to make their address visible or send you their GL-Code'
      });
      }
      //If this person's address is public then send the person their informations back
      else{
        res.status(200).json({
          Response: 'public',
          Home_Address: doc.Home_Address,
          Work_Address: doc.Work_Address
      });
      }
  })
    .catch(err => {
      res.status(500).json({ error: 'This person address is not in our databases' });
    });
});


router.patch("/:Id", (req, res, next) => {
  const id = req.params.Id;
  const updateUserAddress = {};
  for (const ops of req.body){
    updateUserAddress[ops.dataToChange] = ops.newData;
  }
  Users_Addresses.update({_id: id}, {$set: updateUserAddress})
  .exec()
  .then(result =>{
    res.status(200).json({
      success: true,
      message: 'data have been updated'
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });

  })
});


router.delete("/:Id", (req, res, next) => {
  const id = req.params.Id;
  Users_Addresses.remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json({
      success: true,
      message: 'data have been deleted'
    });
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      error: err
    });

  });

});









module.exports = router;