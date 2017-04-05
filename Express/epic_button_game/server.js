// require express, path, body-parser
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// tell the express app to listen on port 3000
var server = app.listen(3000, function() {
	console.log("listening on port 3000");
})
//we're going to have /routes/index.js handle all of our routing
var route = require('./routes/index.js')(app, server);
