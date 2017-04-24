var mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
    name: String
})
var Person = mongoose.model("Person", PersonSchema);