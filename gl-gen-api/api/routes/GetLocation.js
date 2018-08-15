const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var axios = require('axios');
const decode = require('../algorithme/pluscodealgo').decode;



const decodeGLCode = (GLCODE) => {
    var decoded = decode(GLCODE);
    return ({'latitude': decoded.latitudeCenter, 'longitude': decoded.longitudeCenter});
}


FindCity =  async (latitude, longitude) =>{
    try {
        var response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            var address = response.data.address;
            console.log(JSON.stringify(address));
            
            return {address: address, city: address.state};
        }
        catch(err){
            console.log(err);
        }
}

GetCityGLCode = async (glcode) => {
    try{
    var result = decodeGLCode(glcode);
    var Region = await FindCity(result.latitude, result.longitude);
    return Region;
    }
    catch(err){
        console.log(err);
    }

}


router.post("/",   async (req, res, next) => {
  
    var Results = await (FindCity(req.body.latitude, req.body.longitude));
    console.log(Results);

    res.send(Results);
});

router.post("/glcode",   async (req, res, next) => {
    var response =  await GetCityGLCode(req.body.GLCODE);
    res.send(response);
});




module.exports = router;