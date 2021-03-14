var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " +myDate());
  res.end();
}).listen(8080);

function myDate(){
  return Date();
}