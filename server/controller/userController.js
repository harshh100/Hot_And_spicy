const mongoose = require('mongoose');
const { ItmModel } = require('../models/ItmSchema.model');
const { AdminModel } = require('../models/Admin.model');
const jwt = require('jsonwebtoken')
const otpGenerator = require('otp-generator');
const { OrderModel } = require('../models/Order.model');
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } = process.env;

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})

const userController = {
    async getItems(req, res) {
        try {
            const itms = await ItmModel.find({});
            res.send(itms);
        } catch (error) {
            return res.status(500).json({ err: "Error finding documents" });
        }
    },
    async updateItems(req, res) {
        const { username } = req.user;

        const adcheck = await AdminModel.findOne({ username })
        if (!adcheck) {
            return res.status(404).json({ error: "Item or subitem not found" });
        }

        try {
            const { itm, subitm, newPrice, newIngredient, newStock, newFeatured } = req.body;
            // console.log("itm : " + itm);
            // console.log("subitm : " + subitm);
            // console.log("newPrice : " + newPrice);
            // console.log("newIngredient : " + newIngredient);
            // console.log("newStock : " + newStock);
            // Update the specific subitem using the updateOne method

            if (newFeatured) {
                const itms = await ItmModel.find({});
                const filteredSubitms = itms.reduce((subitms, itm) => {
                    subitms.push(...itm.subitms.filter((subitm) => subitm.featured === true));
                    return subitms;
                }, []);
                // console.log("flength : " + filteredSubitms.length);
                if (filteredSubitms.length > 2) {
                    return res.status(404).json({ error: "Only 3 Featured Items Allowed" });
                }
            }

            const updatedItem = await ItmModel.updateOne(
                { itm: itm, "subitms.SubName": subitm }, // Filter to find the item and subitem
                {
                    $set: {
                        "subitms.$.price": newPrice,
                        "subitms.$.ingredient": newIngredient,
                        "subitms.$.stock": newStock,
                        "subitms.$.featured": newFeatured,
                    },
                },
            );
            // console.log(updatedItem);

            if (updatedItem.nModified === 0) {
                return res.status(404).json({ error: "Item or subitem not found" });
            } else {
                res.status(200).json({ msg: "data updated successfully" });
            }

        } catch (error) {
            console.error('Error updating documents:', error);
            return res.status(500).json({ err: "Error updating documents" });
        }
    },
    async adminlogin(req, res) {

        const { username, password } = req.body;
        // console.log(username + "  " + password);

        try {
            AdminModel.findOne({ username })
                .then(user => {

                    if (user.password != password) return res.status(400).send({ error: "Enter Valid Username or Password" });

                    const token = jwt.sign({
                        userId: user._id,
                        username: user.username,
                        role: user.role
                    }, process.env.SECRETkey, { expiresIn: "10m" });

                    return res.status(200).send({
                        token
                    });
                })
                .catch(err => {
                    return res.status(400).send({ error: "Enter Valid Username or Password" });
                });

        } catch (error) {
            return res.status(500).json({ err: "Error in login" });
        }
    },
    async sendotp(req, res) {
        // const countryCode = 91;
        const countryCode = 44;
        // const countryCode = 1;
        // const num = 7893932468;
        const { phoneNumber } = req.body;
        // console.log(phoneNumber);
        try {
            const otpResponse = await client.verify
                .services(TWILIO_SERVICE_SID)
                .verifications.create({
                    to: `+${countryCode}${phoneNumber}`,
                    channel: "sms",
                });
            // res.status(200).send(`OTP send successfully! : ${JSON.stringify(otpResponse)}`);
            return res.status(200).send({ msg: `OTP Send To ${phoneNumber}` });
        } catch (error) {
            console.log(error);
            return res.status(error?.status || 400).send(error?.message || 'Something went wrong !');
        }
    },
    async verifyotp(req, res) {
        // const countryCode = 91;
        const countryCode = 44;
        // const countryCode = 1;

        const { phoneNumber, otp } = req.body;
        try {
            const verifiedResponse = await client.verify
                .services(TWILIO_SERVICE_SID)
                .verificationChecks.create({
                    to: `+${countryCode}${phoneNumber}`,
                    code: otp,
                });

            const { valid } = verifiedResponse;
            return res.status(200).send({ valid: valid });
            // if (!valid) {
            //     return res.status(401).send("OTP Verification Failed");
            // } else {
            //     return res.status(200).send("OTP verified successfully!");
            // }
            // res.status(200).send({ msg: "OTP verified successfully!" });
        } catch (error) {
            console.log(error);
            return res.status(error?.status || 400).send(error?.message || 'Something went wrong!');
        }
    }, async createOrder(req, res) {
        // const { username, cart, TotalPrice, Take_time, ReceiptNo, Ordertime, userPhone } = req.body;
        // console.log(username, cart, TotalPrice, Take_time, ReceiptNo, Ordertime, userPhone);
        try {
            const newOrder = new OrderModel({ username, cart, TotalPrice, Take_time, ReceiptNo, Ordertime, userPhone });
            await newOrder.save();
            res.status(201).json({ msg: "Order created successfully" });
        } catch (error) {
            res.status(500).json({ msg: 'Error to Create Order entry' });
        }
    }, async getOrders(req, res) {
        try {
            const orders = await OrderModel.find({});
            res.send(orders);
        } catch (error) {
            return res.status(500).json({ err: "Error finding documents" });
        }
    }

}

module.exports = userController;