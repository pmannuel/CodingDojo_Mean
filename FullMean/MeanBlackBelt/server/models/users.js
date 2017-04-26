console.log('users model UP');

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name : {
    	type: String,
    	required: [true, 'Name is required'],
    	minlength: [2, 'Name must be at least 2 characters']
    },
    created_at: {
        type : Date,
        default: Date.now
    },
})

mongoose.model('User', UserSchema);
