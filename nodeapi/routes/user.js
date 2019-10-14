const express = require("express");
var router = express.Router();
const userauth = require("../controllers/user");
const authenticate = require("../controllers/auth");

router.get("/", userauth.allUsers);
router.get("/:userId", authenticate.requireSignin, userauth.getUser);
router.put("/:userId", authenticate.requireSignin, userauth.updateUser);
router.delete("/:userId", authenticate.requireSignin, userauth.deleteUser);

// any route containing :userId, our app will first execute userById()
router.param("userId", userauth.userById);

module.exports = router;
