const express = require("express");
const validator = require("../validator/index");
var router = express.Router();
const postController = require("../controllers/post");
const authenticate = require("../controllers/auth");

router.get("/", authenticate.requireSignin, postController.getPosts);
router.post("/post", validator.createPostValidator, postController.createPost);

module.exports = router;
