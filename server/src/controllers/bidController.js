// controllers/bidController.js
const Bid = require("../models/bid");

exports.createBid = async (req, res) => {
  try {
    const { companyName, bidCost, tenderId } = req.body;
    const newBid = new Bid({ companyName, bidCost, tender: tenderId });
    await newBid.save();
    res.status(201).json(newBid);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBids = async (req, res) => {
  try {
    const bids = await Bid.find().populate("tender").sort({ bidCost: 1 });
    res.status(200).json(bids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getBidsByTenderId = async (req, res) => {
  const tenderId = req.params.tenderId;

  try {
    const bids = await Bid.find({ tender: tenderId }).sort({ bidCost: 1 });
    res.status(200).json(bids);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

