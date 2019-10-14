const express = require("express");
const validator = require("../validator/index");
var router = express.Router();
const postController = require("../controllers/post");
const authenticate = require("../controllers/auth");
const userauth = require("../controllers/user");

router.get("/", postController.getPosts);
router.post(
  "/new/:userId",
  authenticate.requireSignin,
  postController.createPost,
  validator.createPostValidator
);
router.get("/by/:userId", postController.postByUser);
router.put(
  "/postupd/:postId",
  authenticate.requireSignin,
  postController.isPoster,
  postController.updatePost
);
router.delete(
  "/postdel/:postId",
  authenticate.requireSignin,
  postController.isPoster,
  postController.deletePost
);

// any route containing :userId, our app will first execute userById()
router.param("userId", userauth.userById);
// any route containing :postId, our app will first execute postById()
router.param("postId", postController.postById);

module.exports = router;
