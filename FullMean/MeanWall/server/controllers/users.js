var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    create : function(req,res){
        console.log('***controller -> users.js***');
        User.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log('Error in registering new user');
                console.log(err)
                res.json(err)
            }else{
                console.log('successfully registered a new user!');
                console.log(data)
                res.json(data)
            }
        })
    },
    currentUser : function(req,res){
        console.log('This is $cookies loginId');
        User.findOne({_id: req.params.id}, function(err, result){
            console.log(result);
            if(result){
                console.log('Success: currentUser found');
                res.json(result)
            }
            else{
                console.log("Failure: no currentUser found")
                res.json(result)
            }
        })
    },
    login : function(req,res){
        User.findOne({email: req.body.email}, function(err, result){
            console.log('This is the login result:');
            console.log(result);
            if(result){
                console.log('Success: email found');
                if(result.validPassword(req.body.password)){
                    res.json(result)
                }
                else{
                    console.log("Failure: wrong password")
                    return res.json({IncorrectPassword: 'Incorrect Password'})
                }
            }
            else{
                console.log("Failure: no email found")
                res.json({noEmail: "No such email in database"})
            }
        })
    }
}
