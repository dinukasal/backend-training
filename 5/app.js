var express = require("express");
var morgan = require("morgan");
var app = express();

app.use(morgan("combined"));

var server = app.listen(3000, function() {
  console.log("We have started our server on port 3000");
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(function(req, res, next) {
  if (!req.headers.authorization && req.headers.authorization != "123") {
    return res.status(403).json({ error: "No credentials sent!" });
  }
  next();
});

require("./router")(app);
