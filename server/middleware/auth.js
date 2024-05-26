const jwt = require('jsonwebtoken')

async function Auth(req, res, next) {

    try {

        // access authorize header to validate request
        // console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token);
        // retrive the user details fo the logged in user
        const decodedToken = await jwt.verify(token, process.env.SECRETkey);
        // console.log(decodedToken);
        req.user = decodedToken;

        next()

    } catch (err) {
        console.log(err);
        res.status(401).json({ error: "Authentication failed" })
    }
}

module.exports = Auth;