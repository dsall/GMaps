const mongoose = require('mongoose');

const LoginToken = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone: { type: String, required: true },
    uid: {type: String, required: true},
    time: {type: String, require: true},
});

module.exports = mongoose.model('LoginToken', LoginToken);