console.log('orders model UP');

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    created_at: {
        type : Date,
        default: Date.now
    },
    qty : {
    	type: Number,
    	required: [true, 'Qty is required'],
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
})

mongoose.model('Order', OrderSchema);
