const Urls = require("../models/urls");
const { nanoid } = require("nanoid");

async function generateShortID(req, res) {
  const short = nanoid(8);
  await Urls.create({
    original: req.body.url,
    shortID: short,
    clicks: 0,
    createdBY: req.user.email,
  });
  const allUrls = await Urls.find({
    createdBY: req.user.email,
  });
  return res.render("home", {
    id: short,
    urls: allUrls,
  });
}

// async function urlAnalytics(req, res) {
//   const id = req.params.id;
//   const result = await Urls.findOne({ shortID: id });
//   res.send("The total no.of clicks are : " + result.clicks);
// }

async function handleGetUrl(req, res) {
  const id = req.params.id;
  const redirectTo = await Urls.findOneAndUpdate(
    {
      shortID: id,
    },
    {
      $inc: { clicks: 1 },
    },
  );
  return res.redirect(redirectTo.original);
}

module.exports = {
  generateShortID,
  handleGetUrl,
};
