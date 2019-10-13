const express = require("express");
var router = express.Router();
const auth = require("../controllers/auth");
const validator = require("../validator/index");

router.post("/signup", validator.userSignupValidator, auth.signup);
router.post("/signin", auth.signin);

module.exports = router;
