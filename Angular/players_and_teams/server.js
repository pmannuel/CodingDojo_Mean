//Load the express module
var express = require("express");

//Use express to create our app
var app = express();

//Path module allows us to work with our directory paths
var path = require("path");

//This line allows our routing to find the static folder directly
app.use(express.static(path.join(__dirname, "./client")));

//Tells our server to listen on port 8000
app.listen(8000, function(){
   console.log("Listening on port 8000");
});
