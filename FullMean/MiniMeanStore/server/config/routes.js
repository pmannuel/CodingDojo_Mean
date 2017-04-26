var path = require('path');
var users = require('./../controllers/users.js');
var products = require('./../controllers/products.js');
var orders = require('./../controllers/orders.js');

module.exports = function(app){
    app.get('/orders', orders.showAllOrders);
    app.post('/order/create', orders.create);
    app.get('/products', products.showAllProducts);
    app.post('/product/create', products.create);
    app.get('/users', users.showAllUsers);
    app.post('/user/create', users.create);
};
