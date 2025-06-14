const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const feedSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    likes: [{ type: String }],
  },
  (this.collection = "feed")
);

module.exports = mongoose.model("Feed", feedSchema);
