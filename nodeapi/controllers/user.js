const _ = require("lodash");
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
// TODO: Getting the sepecific details only using select

const getUser = (req, res) => {
  req.profile.hashedpassword = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const updateUser = (req, res, next) => {
  let user = req.profile;
  user = _.extend(user, req.body); // extend - mutate the source object
  user.updated = Date.now();
  user
    .save()
    .then(profile => {
      console.log("Everything is updated fine");
      res.send(profile);
    })
    .catch(err => {
      console.log("Error is:", err.message);
    });
};

module.exports = {
  userById,
  hasAuthorization,
  allUsers,
  getUser,
  updateUser
};
