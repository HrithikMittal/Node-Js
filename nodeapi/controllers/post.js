const Post = require("../modals/post");

const getPosts = (req, res) => {
  res.send(`Hi I am Adhikansh`);
};

const createPost = (req, res) => {
  const post = new Post(req.body);
  console.log("");
};

module.exports = {
  getPosts
};
