var express = require("express");
var morgan = require("morgan");
var app = express();
var jwt = require('express-jwt');

app.use(morgan("combined"));

var server = app.listen(3000, function() {
  console.log("We have started our server on port 3000");
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);


require("./router")(app);

app.get('/',
  jwt({secret: '123'}),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  });