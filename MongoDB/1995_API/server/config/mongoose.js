var mongoose = require("mongoose");
var conn = mongoose.connect('mongodb://localhost/1995Peeps');

var fs = require('fs');
var path = require('path');

var models_path = path.join( __dirname, '/../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/' + file);
    }
})
