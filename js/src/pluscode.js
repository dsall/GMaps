

var olc = require('./openlocationcode.js');


console.log(olc.encode(47.365590, 8.524997));
console.log(olc.decode('8GC2CMXR+X6'));

var shortCode = olc.shorten('8FVC9G8F+6X', 47.5, 8.5)

console.log(shortCode);

                         


