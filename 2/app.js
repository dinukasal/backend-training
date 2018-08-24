var express = require("express");
var morgan = require("morgan");
var app = express();

app.use(morgan("combined"));

var server = app.listen(3000, function() {
  console.log("We have started our server on port 3000");
});
