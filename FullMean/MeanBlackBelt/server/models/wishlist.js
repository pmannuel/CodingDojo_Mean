console.log('wish model UP');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WishSchema = new mongoose.Schema({
    title : {
    	type: String,
    	required: [true, 'Title is required'],
    	minlength: [5, 'Title must be at least 5 characters']
    },
    description : {
    	type: String,
    	required: [true, 'Description is required'],
    	minlength: [10, 'Description must be at least 10 characters']
    },
    _user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _taggeduser : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    completed : {
        type: Boolean,
        default: false
    },
    created_at: {
        type : Date,
        default: Date.now
    },
})

mongoose.model('Wish', WishSchema);
