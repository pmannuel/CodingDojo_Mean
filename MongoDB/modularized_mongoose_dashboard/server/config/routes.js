var dogs = require('../controllers/dogs.js');

module.exports = function(app) {
    // Index
    app.get('/', function(req, res){
      dogs.index(req, res)
    });

    // Create
    app.post('/', function(req, res){
      // Create a new dog!
      dogs.create(req, res)
    });

    // New
    app.get('/new', function(req, res){
      res.render('new');
    });

    // Show
    app.get('/:id', function(req, res){
      dogs.show(req, res)
    });

    app.get('/:id/edit/', function(req, res){
      dogs.edit(req, res)
    });

    // Update
    app.post('/:id', function(req, res){
      dogs.update(req, res)
    });

    // Delete
    app.post('/:id/delete', function(req, res){
      dogs.delete(req, res)
    });
}
