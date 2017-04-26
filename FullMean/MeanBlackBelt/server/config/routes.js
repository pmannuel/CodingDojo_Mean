var path = require('path');
var users = require('./../controllers/users.js');
var wishes = require('./../controllers/wishes.js');

module.exports = function(app){
    app.get('/user/:id', users.show);
    app.get('/users/other/:id', users.showOthers);
    app.get('/wishes/:id', wishes.showAll);
    app.get('/wish/:id/currentuser/:user_id', wishes.update);
    app.post('/login', users.login);
    app.post('/create', users.create);
    app.post('/wish/create', wishes.create);
};
