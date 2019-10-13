const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

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
  },
  photo: {
    type: Buffer,
    contentType: String
  },
  postedBy: {
    type: ObjectId,
    ref: "User"
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
