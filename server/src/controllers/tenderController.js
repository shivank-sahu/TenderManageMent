// controllers/tenderController.js
const Tender = require("../models/tender");

exports.createTender = async (req, res) => {
  try {
    const { name, description, startTime, endTime, bufferTime } = req.body;
    const newTender = new Tender({
      name,
      description,
      startTime,
      endTime,
      bufferTime,
    });
    await newTender.save();
    res.status(201).json(newTender);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTenders = async (req, res) => {
  try {
    const tenders = await Tender.find();
    res.status(200).json(tenders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
