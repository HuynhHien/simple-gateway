
const http = require('http');

const regPort = 8080;
var server = http.createServer(function (req, res) {

  if (req.method === "GET") {
    console.log(`Register request regId = ${res.body}!`);  
    res.send('Thanks you !');
  } else if (req.method === "POST") {
  
      var body = "";
      req.on("data", function (chunk) {
          body += chunk;
      });

      req.on("end", function(){
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(body);
      });
  }

}).listen(regPort);


