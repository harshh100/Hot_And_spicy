const mongoose = require('mongoose');


async function connect() {

    mongoose.set('strict', true);
    const db = await mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected")
    return db;
}

module.exports = connect;