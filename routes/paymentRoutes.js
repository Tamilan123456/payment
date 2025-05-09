// routes/paymentRoutes.js

const express = require("express");
const router = express.Router();
const { createOrder, verifyPayment } = require("../controllers/paymentController");

router.post("/create-order", createOrder);
router.post("/verify", verifyPayment); // ✅ add this line

module.exports = router;
