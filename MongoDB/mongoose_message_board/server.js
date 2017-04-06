var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.listen(3000, function(){
	console.log("server running on port 3000");
});

mongoose.connect('mongodb://localhost/message_board_mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
});

var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
	name: { type: String, required: true },
	text: { type: String, required: true },
	comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}]
	}, { timestamps: true });
var Message = mongoose.model('Message', messageSchema);

var commentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	text: { type: String, required: true },
	_message: {type: Schema.Types.ObjectId, ref: 'Message'},
}, {timestamps: true });
var Comments = mongoose.model('Comments', commentSchema);

var route = require('./routes/index.js')(app, Message, Comments);
