const jwt = require('jsonwebtoken')

async function Auth(req, res, next) {

    try {

        // access authorize header to validate request
        const token = req.headers.authorization.split(" ")[1];

        // retrive the user details fo the logged in user
        const decodedToken = await jwt.verify(token, process.env.SECRETkey);
        req.user = decodedToken;

        next()

    } catch (err) {
        res.status(401).json({ error: "Authentication failed" })
    }
}

module.exports = Auth;