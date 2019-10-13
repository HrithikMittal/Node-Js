const jwt = require("jsonwebtoken");
require("dotenv").config();

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

const signin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    // If error or no user
    if (err || !user) {
      return res.status(401).json({
        error: "User with that email doesn't exist.Please SignUp"
      });
    }
    // If user is found make sure the email and password match
    // create authenticate method in user modal
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }

    // generate a token with used id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // presist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });

    // return reponse with user and token to frontent client
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, email, name } });
  });
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.json({ message: "Signout sccess!" });
};

module.exports = {
  signup,
  signin,
  signout
};
