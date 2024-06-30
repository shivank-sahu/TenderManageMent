// services/bidService.js
const Bid = require("../models/bid");
const Tender = require("../models/tender");

class BidService {
  static async createBid(bidData) {
    try {
      const newBid = new Bid(bidData);
      await newBid.save();

      // If the bid is placed in the last 5 minutes, extend the tender end time by the buffer time
      const tender = await Tender.findById(bidData.tenderId);
      if (tender) {
        const timeDifference = tender.endTime - new Date();
        if (timeDifference <= 5 * 60 * 1000) {
          tender.endTime = new Date(
            tender.endTime.getTime() + tender.bufferTime * 60 * 1000
          );
          await tender.save();
        }
      }

      return newBid;
    } catch (error) {
      throw new Error("Error creating bid: " + error.message);
    }
  }

  static async getAllBids() {
    try {
      return await Bid.find().populate("tenderId");
    } catch (error) {
      throw new Error("Error fetching bids: " + error.message);
    }
  }
}

module.exports = BidService;
