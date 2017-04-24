var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    show: function(req,res){
        console.log("Showing")
        Person.find({}, function(err,people){
            res.json(people);
        })
    },

    nuke: function(req, res){
        Person.remove({}, function(err, people){
            console.log("Boom.")
            res.redirect('/')
        })
    },

    create: function(req,res){
        console.log(req.params);
        console.log(req.params.name);
        console.log("It's Running")
        var new_meat = new Person({name: req.params.name});
        console.log(new_meat);
        new_meat.save(function(err) {
            if(err){
                console.log("Something is wrong");
            } else {
                res.redirect('/');
            }
        })
    },

    delete: function(req,res){
        Person.findOneAndRemove({name: req.params.name}, function(err,res){
            if(err){
                console.log("Nope");
            }
        });
        res.redirect('/');
    }
}
