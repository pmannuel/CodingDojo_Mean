var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

var Dog = mongoose.model('Dog', DogSchema);
