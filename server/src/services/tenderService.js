// services/tenderService.js
const Tender = require("../models/tender");

class TenderService {
  static async createTender(tenderData) {
    try {
      const newTender = new Tender(tenderData);
      await newTender.save();
      return newTender;
    } catch (error) {
      throw new Error("Error creating tender: " + error.message);
    }
  }

  static async getAllTenders() {
    try {
      return await Tender.find();
    } catch (error) {
      throw new Error("Error fetching tenders: " + error.message);
    }
  }
}

module.exports = TenderService;
