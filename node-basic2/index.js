const express = require("express");
var app = express();

var port = 3000;
app.get("/", (req, res) => {
  res.send("Hi This is Express World");
});

app.listen(port, (req, res) => {
  console.log(`Server is listening on ${port}`);
});
