const express = require("express");
const validator = require("../validator/index");
var router = express.Router();
const postController = require("../controllers/post");
const authenticate = require("../controllers/auth");
const userauth = require("../controllers/user");

router.get("/", authenticate.requireSignin, postController.getPosts);
router.post("/post", validator.createPostValidator, postController.createPost);

// any route containing :userId, our app will first execute userById()
router.param("userId", userauth.userById);

module.exports = router;
