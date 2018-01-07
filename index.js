var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello');
});

app.listen(3000, function () {
  console.log(`Server listening at port: ${PORT}`);
});
