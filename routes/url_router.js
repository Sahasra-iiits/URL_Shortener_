const express = require("express");
const { generateShortID, handleGetUrl } = require("../controllers/url");

const router = express.Router();

router.post("/", generateShortID);
//router.get("/analytics/:id", urlAnalytics);
router.get("/:id", handleGetUrl);

module.exports = router;
