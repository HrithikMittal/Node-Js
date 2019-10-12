const express = require("express");
const validator = require("../validator/index");
var router = express.Router();
const postController = require("../controllers/post");

router.get("/", postController.getPosts);
router.post("/post", validator.createPostValidator, postController.createPost);

module.exports = router;
