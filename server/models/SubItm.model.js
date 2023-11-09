const mongoose = require('mongoose');

const SubItmSchema = new mongoose.Schema({
    SubName: {
        unique: true,
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ingredient: String,
    stock: {
        type: Number,
        required: true,
    },
    rating: Number,
    review: Number,
    featured: Boolean,
});


mongoose.model('SubItm', SubItmSchema);

const SubItmModel = mongoose.model('SubItm') || mongoose.model('SubItm', SubItmSchema);

module.exports = { SubItmModel, SubItmSchema };