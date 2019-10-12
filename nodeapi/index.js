const express = require("express");
var app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
app.use(bodyParser.json());

// bring in routes
const Posts = require("./routes/post");

// connect to the Database
mongoose
  .connect(process.env.MongoURL, { useNewUrlParser: true })
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

app.listen(process.env.PORT, () => {
  console.log("Server is listening");
});
