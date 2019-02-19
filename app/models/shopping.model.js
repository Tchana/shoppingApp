const mongoose = require('mongoose');

const shoppingSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String
}, {
    timestamps: true
});


module.exports = mongoose.model("Shopping", shoppingSchema);