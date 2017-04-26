var mongoose = require('mongoose')
var Product = mongoose.model('Product');

module.exports = {
    showAllProducts : function(req,res){
        Product.find({})
        // .populate('_product')
        .exec(function(err, data){

            res.json(data);

        })
    },
    create : function(req,res){
        console.log('@backend product.js');

        Product.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log('Failure: created new product');
                console.log(err)
                res.json(err)
            }else{
                console.log('Success: created new product');
                console.log(data)
                res.json(data)
            }
        })
    },

}
