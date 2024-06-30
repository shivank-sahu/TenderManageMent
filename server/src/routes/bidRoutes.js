// routes/bidRoutes.js
const express = require("express");
const router = express.Router();
const { createBid, getBids,getBidsByTenderId } = require("../controllers/bidController");

router.post("/bids", createBid);
router.get("/bids", getBids);
router.get("/bids/:tenderId", getBidsByTenderId);

module.exports = router;
