const express = require("express");
var app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config();
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cookieParser());

// bring in routes
const Posts = require("./routes/post");
const Auth = require("./routes/auth");
const User = require("./routes/user");

// connect to the Database
mongoose
  .connect(process.env.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database connection is successfully done");
  })
  .catch(err => {
    console.log("Error is ", err.message);
  });

// middleware
const myOwnMiddleware = (req, res, next) => {
  console.log("this is mymiddleware");
  next();
};

app.use(morgan("dev"));
app.use(myOwnMiddleware);
app.use("/post", Posts);
app.use("/", Auth);
app.use("/", User);

app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is listening");
});
