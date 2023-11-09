const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
});

mongoose.model('Admin', AdminSchema);

const AdminModel = mongoose.model('Admin') || mongoose.model('Admin', AdminSchema);

module.exports = { AdminModel, AdminSchema };
