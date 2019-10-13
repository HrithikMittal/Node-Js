const User = require("../modals/user");

const signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists)
    return res.status(403).json({
      error: "Email is already exists"
    });

  const user = await new User(req.body);
  await user
    .save()
    .then(user => {
      res.status(200).json({
        message: "Successfully signup Please login"
      });
    })
    .catch(error => {
      console.log("Error is :", error.message);
    });
};

module.exports = {
  signup
};
