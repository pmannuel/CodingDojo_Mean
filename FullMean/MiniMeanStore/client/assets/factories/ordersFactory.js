console.log('Orders Factory');

app.factory('ordersFactory', ['$http', function($http) {

  var orders = [];
  var order = {};
  var factory = {};

    factory.showAllOrders = function(callback){

      $http.get('/orders').then(function(data){
        orders = data.data;
        callback(orders);
      });
    };

    factory.showAllProducts = function(callback){

      $http.get('/products').then(function(data){
        products = data.data;
        callback(products);
      });
    };

    factory.showAllUsers = function(callback){

      $http.get('/users').then(function(data){
        users = data.data;
        callback(users);
      });
    };

    factory.addOrder = function(newOrder, callback){
        console.log("@factory.addOrder")
        $http.post('/order/create', newOrder).then(function(data){
            console.log("***** RETURNED DATA: data.data *****")
            console.log(data.data)
            callback(data);
        })
    };

    return factory;
}]);
