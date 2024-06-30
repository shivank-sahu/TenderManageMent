// routes/tenderRoutes.js
const express = require("express");
const router = express.Router();
const { createTender, getTenders } = require("../controllers/tenderController");

router.post("/tenders", createTender);
router.get("/tenders", getTenders);

module.exports = router;
