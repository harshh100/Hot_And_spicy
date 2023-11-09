const mongoose = require('mongoose');
const { SubItmSchema } = require("./SubItm.model");

const ItmSchema = new mongoose.Schema({
    itm: {
        type: String,
        required: true,
        unique: true,
    },
    subitms: [SubItmSchema],
});


mongoose.model('Itm', ItmSchema);

const ItmModel = mongoose.model('Itm') || mongoose.model('Itm', ItmSchema);

module.exports = { ItmModel, ItmSchema };