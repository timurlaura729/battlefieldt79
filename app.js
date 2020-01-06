var url = require('url');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var qx = url.parse(req.url, true);
  res.write("url "+req.url);
  res.write("<br>");
  res.write("host "+qx.host); 
  res.write("<br>");
  res.write("pathname "+qx.pathname); 
  res.write("<br>");
  res.write("get "+qx.search);
  res.write("<br>");
/*
Выдаст
url /?ttt=7777
host null
pathname /
get ?ttt=7777
*/	
	var qdataxxx = qx.query; 
	res.write("<br>");
    res.write(qdataxxx.ttt);
// если не будет парамметра обекта будет ошибка  
	
  var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  var q = url.parse(adr, true);
  res.write("<h1>TEST</h1>"+q.host); //returns 'localhost:8080'
  res.write("<br>");
  res.write(q.pathname); //returns '/default.htm'
  res.write("<br>");
  res.write(q.search); //returns '?year=2017&month=february'	
  
  var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
  res.write("<br>");
  res.write(qdata.month);
  res.write("<br>");
  res.write(qdata.year);
  res.write("<br>");
  res.end();
}).listen(8080);
