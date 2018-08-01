
const mongoose = require('mongoose');

const LoginPin = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone: { type: String, required: true },
    pin : {type: String, required: true},
    time: {type: String, required: true},
});

module.exports = mongoose.model('LoginPin', LoginPin);