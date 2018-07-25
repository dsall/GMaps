const express = require('express');
const router = express.Router();



router.get('/', (requestAnimationFrame, res, next) =>{
    res.status(200).json({
        message: "handling get products"
    });
});

router.post('/', (requestAnimationFrame, res, next) =>{
    res.status(200).json({
        message: "handling post products"
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id == 'specisl'){
        res.status(200).json({
            message: "you are special",
            id: id
        });
    }
    else{
        res.status(200).json({
            message: "Not Special",
            id: id
        });
    }

});


module.exports = router;
