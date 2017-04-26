var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    showAllUsers : function(req,res){
        User.find({})
        // .populate('_user')
        .exec(function(err, data){

            res.json(data);

        })
    },
    create : function(req,res){
        console.log('@backend controller.js');

        User.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log('Failure: created new user');
                console.log(err)
                res.json(err)
            }else{
                console.log('Success: created new user');
                console.log(data)
                res.json(data)
            }
        })
    },

}
