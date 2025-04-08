require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const serviceRoutes = require("./routes/serviceRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// ✅ Allowed frontend domains
const allowedOrigins = [
  "http://localhost:5173",
  "https://rainbow-fudge-7c37fb.netlify.app",
  // also add this if you're using it
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Allow preflight requests
app.options("*", cors());

// ✅ Body parser
app.use(express.json());

// ✅ API Routes
app.use("/api", paymentRoutes);
app.use("/api", serviceRoutes);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Debug logs
console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);
