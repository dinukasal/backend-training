var express = require("express");
var morgan = require("morgan");
var app = express();
const basicAuth = require("express-basic-auth");

app.use(morgan("combined"));

var server = app.listen(3000, function() {
  console.log("We have started our server on port 3000");
});

app.use(
  basicAuth({
    users: { admin: "123" },
    challenge: true
  })
);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

require("./router")(app);
