console.log('products model UP');

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name : {
    	type: String,
    	required: [true, 'Name is required'],
    	minlength: [2, 'Name must be at least 2 characters']
    },
    created_at: {
        type : Date,
        default: Date.now
    },
    url : {
    	type: String,
    	required: [true, 'Url is required'],
    },
    description : {
    	type: String,
    	required: [true, 'Description is required'],
    	minlength: [2, 'Description must be at least 2 characters']
    },
    qty : {
    	type: Number,
    	required: [true, 'Qty is required'],
    },
})

mongoose.model('Product', ProductSchema);
