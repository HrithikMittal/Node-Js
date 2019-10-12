const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
    maxlength: 50,
    minlength: 5
  },
  body: {
    type: String,
    required: "Body is required",
    maxlength: 2000,
    minlength: 5
  }
});

module.exports = mongoose.model("Post", postSchema);
