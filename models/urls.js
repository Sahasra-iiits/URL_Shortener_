const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true,
  },
  shortID: {
    type: String,
    required: true,
    unique: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
  createdBY: {
    type: mongoose.Schema.Types.String,
    ref: "users",
  },
});

const Urls = mongoose.model("urls", urlSchema);

module.exports = Urls;
