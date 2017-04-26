var mongoose = require('mongoose')
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
    showAllOrders : function(req,res){
        Order.find({})
        .populate('_user')
        .populate('_product')
        .exec(function(err, data){

            res.json(data);

        })
    },
    create : function(req,res){
        console.log('@backend order.js');

        Order.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log('Failure: created new order');
                console.log(err)
                res.json(err)
            }else{
                console.log('Success: created new order');
                Product.findOne({_id:data._product}, function(err, product){
                    var new_qty = product.qty - data.qty;
                    product.qty = new_qty;
                    product.save();

                    res.json(data)
                })
            }
        })
    },

}
