const express = require("express");
var router = express.Router();
const auth = require("../controllers/auth");

router.post("/signup", auth.signup);

module.exports = router;
