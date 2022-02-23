const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
    name:String,
    price: Number
    
});

module.exports = mongoose.model('mobiles', shopSchema);