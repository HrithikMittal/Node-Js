const http = require("http");
var port = 3000;

http
  .createServer((req, res) => {
    console.log(req.method + req.url);
    if (req.url == "/greeting" && req.method == "GET") {
      res.end("Hey welcome Sir/Madam");
    }
    res.end("Hi I am Adhikansh Mittal");
  })
  .listen(port, () => {
    console.log("Server is listening on ", port);
  });
