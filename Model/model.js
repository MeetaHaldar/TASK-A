const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("stock", dataSchema);
