var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
fs.appendFile('mynewfile1.txt', 'Контент <br>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

  fs.readFile('mynewfile1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);