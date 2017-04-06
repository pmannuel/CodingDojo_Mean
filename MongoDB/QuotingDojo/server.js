var path = require("path");

// require express and create the express app
var express = require("express");
var app = express();

//set up mongoose for db connection
var mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');

// require bodyParser for post data handling
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// set the views folder with ejs view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotingdojo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
});

var quoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
}, {timestamps: true});
var Quote = mongoose.model('Quote', quoteSchema);

// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})

var route = require('./routes/index.js')(app, Quote);
