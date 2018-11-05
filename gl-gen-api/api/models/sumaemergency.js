
const mongoose = require('mongoose');

const Suma = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone: { type: String, required: true },
    location : {type: Object , required: true}
});

module.exports = mongoose.model('Suma', Suma);