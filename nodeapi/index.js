const express = require("express");
var app = express();
const morgan = require("morgan");

// bring in routes
const { getPosts } = require("./routes/post");

// middleware
const myOwnMiddleware = (req, res, next) => {
  console.log("this is mymiddleware");
  next();
};

app.use(morgan("dev"));
app.use(myOwnMiddleware);

app.get("/", getPosts);

var port = 3000;
app.listen(port, () => {
  console.log("Server is listening");
});
