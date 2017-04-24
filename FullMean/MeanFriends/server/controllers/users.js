var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {

  index : function(req,res){
    User.find({}, function(err, data){

      res.json(data);
    })
},

  create : function(req,res){
      console.log(req.body);
    User.create(req.body, function(err, data){
        console.log(req.body);
      if(err){
        console.log(err)
      }else{
        console.log('Im at the Backend');
        res.json(data)
      }
    })
},

  update : function(req,res){
    User.findOne({_id: req.params.id}, function(err, user){
        console.log('************');
        console.log(req.params.id);
        console.log(req.body);
        console.log('************');
      if(err){
        console.log(err);
      }else{
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.birthday = req.body.birthday;
        user.save(function(err, updatedUser){
          if (err){
            console.log(err);
          }else{
            res.json(updatedUser);
          }
        })
      }
    })
},

  delete : function(req,res){
    //your code here
    User.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "User deleted!"});
      }
    })
},

  show : function(req,res){
    //your code here
    User.findOne({_id: req.params.id}, function(err, result){

      res.json(result);
    })
  }
}
