const express = require("express");
const { handleUserSignup, handleLogin } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleLogin);

module.exports = router;
