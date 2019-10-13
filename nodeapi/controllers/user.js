const User = require("../modals/user");

const userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found"
      });
    }
    req.profile = user; // adds profile object in req with user info
    next();
  });
};

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized to perform this action"
    });
  }
};

const allUsers = (req, res) => {
  User.find()
    .then(users => {
      if (!users) {
        res.send("No User found there...");
      }
      res.send(users);
    })
    .catch(error => {
      console.log("Error is:", error.message);
    });
};

module.exports = {
  userById,
  hasAuthorization,
  allUsers
};
