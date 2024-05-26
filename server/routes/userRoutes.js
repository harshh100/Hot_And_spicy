const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const Auth = require('../middleware/auth.js')


router.get('/getItems', userController.getItems);
router.post('/userauth', Auth, (req, res) => { res.status(200).json({ authenticationStatus: "authorized" }) });
router.put('/updateItems', Auth, userController.updateItems);
router.post('/adminlogin', userController.adminlogin);
router.post('/sendotp', userController.sendotp);
router.post('/verifyotp', userController.verifyotp);
router.post('/createorder', userController.createOrder);
router.get('/getOrders', userController.getOrders);

module.exports = router;