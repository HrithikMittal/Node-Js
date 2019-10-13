const express = require("express");
var router = express.Router();
const auth = require("../controllers/auth");
const userauth = require("../controllers/user");
const validator = require("../validator/index");

router.post("/signup", validator.userSignupValidator, auth.signup);
router.post("/signin", auth.signin);
router.get("/signout", auth.signout);

// any route containing :userId, our app will first execute userById()
router.param("userId", userauth.userById);

module.exports = router;
