var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');

module.exports = {
    index: function(req, res){
        Dog.find({}, function(err, results){
          if (err) { console.log(err); }
          res.render('index', { dogs: results });
        });
    },
    create: function(req, res){
        Dog.create(req.body, function(err, result){
          if (err) { console.log(err); }
          res.redirect('/')
        });
    },
    show: function(req, res){
        Dog.findOne({ _id: req.params.id }, function(err, response) {
          if (err) { console.log(err); }
          res.render('show', { dog: response });
        });
    },
    edit: function(req, res){
        Dog.findOne({ _id: req.params.id }, function(err, response) {
          if (err) { console.log(err); }
          res.render('edit', { dog: response });
        })
    },
    update: function(req, res){
        Dog.update({ _id: req.params.id }, req.body, function(err, result){
          if (err) { console.log(err); }
          res.redirect('/');
        });
    },
    delete: function(req, res){
        Dog.remove({ _id: req.params.id }, function(err, result){
          if (err) { console.log(err); }
          res.redirect('/');
        });
    }
}
