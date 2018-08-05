var pluscode = require('../../algorithme/pluscodealgo').encode;
var decode = require('../../algorithme/pluscodealgo').decode;

const Code = (latitude, longitude) => {
    return pluscode(latitude, longitude);
}

const decodeGLCode = (GLCODE) => {
    var decoded = decode(GLCODE);
    return ({'latitude': decoded.latitudeCenter, 'longitude': decoded.longitudeCenter});
}

var mongl = pluscode(39.1476567,-84.5781404);
var gldecode = decodeGLCode('86FQ4CXC+3P');

console.log('39.1476567,-84.5781404',mongl);
console.log(mongl, gldecode);