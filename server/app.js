require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser')
const jwt = require('jsonwebtoken');
const connect = require('./db/Database')
const app = express();
const router = require('./routes/userRoutes')
const { Itm } = require('./models/ItmSchema.model');
const cors = require('cors');
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

let PORT = process.env.PORT || 5000;

app.use('/api', router);

app.get('/', async (req, res) => {
    res.json({ msg: "success" })
});


connect().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server connected to http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
