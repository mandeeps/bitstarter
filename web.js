var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var text = fs.readFileSync('./index.html');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.write(text);
  response.close();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
