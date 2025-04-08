const Razorpay = require("razorpay");

// ✅ Create and export a configured instance
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET, // or RAZORPAY_KEY_SECRET depending on your env
});

module.exports = instance;
