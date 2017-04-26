var path = require('path');
var users = require('./../controllers/users.js');

module.exports = function(app){
    app.get('/user/:id', users.show);
    app.post('/login', users.login);
    app.post('/create', users.create);
};
