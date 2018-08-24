var express = require("express");
var morgan = require("morgan");
var app = express();

app.use(morgan("combined"));

var server = app.listen(3000, function() {
  console.log("We have started our server on port 3000");
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.post("/", function(req, res) {
  res.send("ok");
});
