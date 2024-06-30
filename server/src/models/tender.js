// models/tender.js
const mongoose = require("mongoose");

const TenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  bufferTime: {
    type: Number, // in minutes
    required: true,
  },
});

module.exports = mongoose.model("Tender", TenderSchema);
