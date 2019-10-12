const http = require("http");
var port = 3000;

http
  .createServer((req, res) => {
      console.log(req);
    res.end("Hi I am Adhikansh Mittal");
  })
  .listen(port, () => {
    console.log("Server is listening on ", port);
  });
