var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    show : function(req,res){
        console.log('@users.show');
        User.findOne({_id: req.params.id}, function(err, data){
            console.log(data);
            if(data){
                console.log('Success: user found');
                res.json(data)
            }
            else{
                console.log("Failure: no user found")
                res.json(data)
            }
        })
    },
    login : function(req,res){
        User.findOne({name: req.body.name}, function(err, data){
            console.log('***** RETURNED DATA *****');
            console.log(data);
            if(data){
                console.log('Success: username found');
                res.json(data)
            }
            else{
                console.log("Failure: username found")
                res.json({failure: "no username found"})
            }
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
