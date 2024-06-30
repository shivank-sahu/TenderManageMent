// models/bid.js
const mongoose = require("mongoose");

const BidSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  bidTime: {
    type: Date,
    default: Date.now,
  },
  bidCost: {
    type: Number,
    required: true,
  },
  tender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tender",
    required: true,
  },
});

module.exports = mongoose.model("Bid", BidSchema);
