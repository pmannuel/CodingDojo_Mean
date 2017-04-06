var path = require("path");
//set up mongoose for db connection

// require express and create the express app
var express = require("express");
var app = express();

var mongoose = require("mongoose");
// require bodyParser for post data handling
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// set the views folder with ejs view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
});

var userSchema = new mongoose.Schema({
	name: String,
	age: Number
});
var User = mongoose.model('User', userSchema);

// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})

var route = require('./routes/index.js')(app, User);
