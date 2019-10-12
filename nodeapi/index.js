const express = require("express");
var app = express();

var port = 3000;

app.get("/", (req, res) => {
  res.send(`Hi I am Adhikansh`);
});

app.listen(port, () => {
  console.log("Server is listening");
});
