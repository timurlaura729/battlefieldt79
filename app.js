exports.myDateTime = function () {
  return Date();
};


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(exports.myDateTime);
}).listen(8080);
