const Post = require("../modals/post");

const getPosts = (req, res) => {
  res.send(`Hi I am Adhikansh`);
};

const createPost = (req, res) => {
  const post = new Post(req.body);
  // console.log("CREATING POSt:", post);
  post
    .save()
    .then(post => {
      if (!post) {
        res.status(404).send("There is some error in getting the post back");
      }
      res.status(200).json(post);
    })
    .catch(err => {
      console.log("Error is:", err.message);
    });
};

module.exports = {
  getPosts,
  createPost
};
