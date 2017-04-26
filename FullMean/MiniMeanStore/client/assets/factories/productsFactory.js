console.log('Products Factory');

app.factory('productsFactory', ['$http', function($http) {

  var products = [];
  var product = {};
  var factory = {};

    factory.showAllProducts = function(callback){

      $http.get('/products').then(function(data){
        products = data.data;
        callback(products);
      });
    };

    factory.addProduct = function(newProduct, callback){
        console.log("@factory.addProduct")
        $http.post('/product/create', newProduct).then(function(data){
            console.log("***** RETURNED DATA: data.data *****")
            console.log(data.data)
            callback(data);
        })
    };

    return factory;
}]);
