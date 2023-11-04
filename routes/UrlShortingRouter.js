const express = require("express");
const router = express.Router();
const { shortUrl } = require("../controllers/urlShortingController");

// Shorten the URL
router.post("/", shortUrl);

module.exports = router;
