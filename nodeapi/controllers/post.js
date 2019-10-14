const Post = require("../modals/post");
const formidable = require("formidable");
const fs = require("fs");

const postById = (req, res, next, id) => {
  Post.findById(id)
    .populate("postedBy", "_id name")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).josn({
          error: err
        });
      }
      req.post = post;
      next();
    });
};

const getPosts = (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .select("_id title body")
    .then(posts => {
      if (!posts) {
        res.status(200).send("There is no post to show");
      }
      res.status(200).send(posts);
    })
    .catch(error => {
      console.log("Error is ", error.message);
    });
};

const createPost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }
    let post = new Post(fields);
    req.profile.hashedpassword = undefined;
    req.profile.salt = undefined;
    post.postedBy = req.profile;
    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.json(result);
    });
  });
};

const postByUser = (req, res) => {
  Post.find({ postedBy: req.profile._id })
    .populate("postedBy", "_id")
    .sort("_created")
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(posts);
    });
};

const isPoster = (req, res, next) => {
  let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;
  if (!isPoster) {
    return res.status(403).json({
      eroro: "User is not authorized"
    });
  }
  next();
};

const deletePost = (req, res) => {
  let post = req.post;
  post.remove((err, post) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: "Post deleted successfully"
    });
  });
};

module.exports = {
  getPosts,
  createPost,
  postByUser,
  postById,
  deletePost,
  isPoster
};
