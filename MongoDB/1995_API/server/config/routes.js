var mongoose = require("mongoose");
var personController = require("../controllers/persons.js");

module.exports = function(app){
    // GET /
    app.get('/', personController.show);

    // GET /new/:name/
    app.get('/new/:name', function(req,res){
        personController.create(req,res)
    });

    // GET /remove/:name/
    app.get('/remove/:name', function(req,res){
        personController.delete(req,res)
    });

    // GET /:name/
    app.get('/:name', function(req,res){
        personController.show(req,res)
    });

    app.get('/all/nuke', function(req,res){
        personController.nuke(req, res)
    })
}
