const express = require("express");
var router = express.Router();
const userauth = require("../controllers/user");
const authenticate = require("../controllers/auth");

router.get("/users", userauth.allUsers);
router.get("/user/:userId", authenticate.requireSignin, userauth.getUser);

// any route containing :userId, our app will first execute userById()
router.param("userId", userauth.userById);

module.exports = router;
