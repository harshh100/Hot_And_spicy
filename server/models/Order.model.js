const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    cart: {
        type: [{
            name: String,
            price: Number,
            amount: Number,
        }],
        required: true,
    },
    Ordertime: {
        type: String,
        required: true,
    },
    ReceiptNo: {
        type: String,
        unique: true,
        required: true,
    },
    TotalPrice: {
        type: Number,
        required: true,
    },
    Take_time: {
        type: String,
        required: true,
    },
    userPhone: {
        type: String,
        required: true
    }

});


mongoose.model('Order', OrderSchema);

const OrderModel = mongoose.model('Order') || mongoose.model('Order', OrderSchema);

module.exports = { OrderModel, OrderSchema };