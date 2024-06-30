// backend/src/app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoutes = require("./routes/authRoutes");
const tenderRoutes = require("./routes/tenderRoutes");
const bidRoutes = require("./routes/bidRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");

const app = express();
require("dotenv").config();
// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/user", authRoutes);
app.use("/api/tender", tenderRoutes);
app.use("/api/bid", bidRoutes);
app.use("/api/admin", adminAuthRoutes);

module.exports = app;
