const express = require("express");
const Urls = require("../models/urls");
const { restrictTo } = require("../middlewares/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  else if (req.user.role === "ADMIN") {
    return res.redirect("/admin/urls");
  } else {
    const allUrls = await Urls.find({
      createdBY: req.user.email,
    });
    return res.render("home", {
      urls: allUrls,
    });
  }
});

router.get("/signup", (req, res) => {
  return res.render("login_signup", {
    toggle: 0,
  });
});
router.get("/login", (req, res) => {
  return res.render("login_signup", {
    toggle: 1,
  });
});

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allUrls = await Urls.find({});
  return res.render("admin_home", {
    urls: allUrls,
  });
});

module.exports = router;
