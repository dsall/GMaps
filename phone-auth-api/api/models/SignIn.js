
const mongoose = require('mongoose');

const AddAddressSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: String, required: true },
    Home_Address: {type: String, required: true},
    Work_Address: {type: String},
    private: {type: Boolean, required: true}
    
});

module.exports = mongoose.model('Users_Addresses', AddAddressSchema);