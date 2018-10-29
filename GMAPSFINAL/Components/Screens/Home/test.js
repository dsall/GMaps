
const encode = require('../../Methods/Location/pluscode').encode;
const decode = require('../../Methods/Location/pluscode').decode;
const shorten = require('../../Methods/Location/pluscode').shorten;
const recover = require('../../Methods/Location/pluscode').recoverNearest;

// console.log(decode('849VCWC5+RX'));

console.log(encode(37.42220624, -122.0900600));
// console.log(shorten('8FVC9G8F+6X', 43, 8.5));
// console.log(recover('C5+RX', 37.422062499999996,  -122.0900625  ));

DoTheTrick = (latitude, longitude) => {
    var code = encode(latitude, longitude);
    return (
        {
            glcode:code ,
            // shortcode: shorten('8FVC9G8F+6X', 43, 8.5)
        }
    );
    
}

console.log(DoTheTrick(37.422062499999996,  -122.0900625 ));