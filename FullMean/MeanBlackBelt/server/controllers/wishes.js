var mongoose = require('mongoose')
var User = mongoose.model('User');
var Wish = mongoose.model('Wish');

module.exports = {
    create : function(req,res){
        console.log('@backend controller.js');

        Wish.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log('Failure: created new wish');
                console.log(err)
                res.json(err)
            }else{
                console.log('Success: created new wish');
                console.log(data)
                res.json(data)
            }
        })
    },
    showAll : function(req,res){
        console.log('@wishes.show');
        Wish.find({ $or: [{_user: req.params.id}, {_taggeduser: req.params.id}]})
        .populate('_user')
        .populate('_taggeduser')
        .exec(function(err, data){
            console.log(data);
            if(data){
                console.log('Success: all wishes found');
                res.json(data)
            }
            else{
                console.log("Failure: all wishes found")
                res.json(data)
            }
        })
    },
    update : function(req,res){
        console.log('@wishes.show');
        Wish.findOne({_id: req.params.id}, function(err, wish){
            console.log(wish);
            if(wish){
                console.log('Success: wish found');

                if(wish._user == req.params.user_id || wish._taggeduser == req.params.user_id){
                    if (wish.completed == true) {
                        wish.completed = false;
                        wish.save();
                    }
                    else if (wish.completed == false) {
                        wish.completed = true;
                        wish.save();
                    }
                    res.json(wish)
                }
                else{
                    console.log('**********');
                    console.log('Failure: not authorized to edit wish');
                    console.log('**********');
                    res.json({error: "Oops! That's not your wish :/"})
                }

            }
            else{
                console.log("Failure: wish found")
                res.json(data)
            }
        })
    },
}
