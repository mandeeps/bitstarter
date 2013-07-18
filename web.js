var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/js', express.static(__dirname, '/js'));
app.use('/css', express.static(__dirname, '/css'));

app.get('/', function(request, response) {
  var text = fs.readFile('index.html');
  response.writeHead(200);
  response.write(text);
  response.end();
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
