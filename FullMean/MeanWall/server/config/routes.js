var path = require('path');
var messages = require('./../controllers/messages.js');
var users = require('./../controllers/users.js');

module.exports = function(app){
    app.get('/messages', messages.index);
    app.post('/message/create', messages.createM);
    app.post('/comment/create', messages.createC);
    app.post('/user', users.create);
    app.post('/login', users.login);
    app.get('/currentUser/:id', users.currentUser);
};
