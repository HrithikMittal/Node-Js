const express = require("express");
var router = express.Router();
const userauth = require("../controllers/user");

router.get("/users", userauth.allUsers);

// any route containing :userId, our app will first execute userById()
router.param("userId", userauth.userById);

module.exports = router;
