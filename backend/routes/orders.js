const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {

    const { products, total } = req.body;

    const order = await Order.create({
        products,
        total
    });

    res.json({
        message: "Order Placed",
        order
    });
});

router.get("/", async (req, res) => {

    const orders = await Order.find();

    res.json(orders);
});

module.exports = router;