//requires
var express = require("express");
var path = require("path");
//  Create the Express app
var app = express();
// require bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// require Mongoose configuration
require('./server/config/mongoose.js')
// "Store the routing function in a variable"
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the 'app' variable.
routes_setter(app);
// Tells Express to listen on port 8000
app.listen(8000, function(){
    console.log("Listening on port 8k.");
})
