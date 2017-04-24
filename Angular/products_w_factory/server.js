var app = angular.module('app', [])
app.factory('productFactory', ['$http', function($http) {
  var factory = {};
  var products = [
      {id: 0, name: 'Jackfruit', price: 5.99, qty: 25},
      {id: 1, name: 'Durian', price: 7.99, qty: 25}
  ];
  var index = 2;
  factory.index = function(callback){
    //callback is the function that is passed to the productIndex by the controller, in this caseP: setProducts.
    callback(products);
  }
  factory.create = function(product, callback){
    if(product.price && Number(parseFloat(product.price))==product.price){
      product.qty = 25;
      product.id = index;
      index++;
      products.push(product);
      callback(products);
    }
  }
  factory.delete = function(id, callback){
    products[id] = null;
    callback(products);
  }
  factory.buy = function(id, callback){
    if(products[id].qty - 1 > 0){
      products[id].qty -= 1;
    }
    else{
      products[id].qty = 0;
    }
    callback(products);
  }
  return factory;
}]);

app.controller('productController', ['$scope','productFactory', function($scope, productFactory) {
  // callback, but not as an anonymous function, rather a named function!
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }

  $scope.product = {};
  $scope.products = {};

  $scope.index = function(){
    productFactory.index(setProducts);
  }

  $scope.index();
  $scope.create = function(){
    productFactory.create($scope.product, setProducts);
  }
  $scope.delete = function(id){
    productFactory.delete(id,setProducts);
  }

}]);

app.controller('orderController', ['$scope','productFactory', function($scope, productFactory) {
  // callback, but not as an anonymous function, rather a named function!
  function setProducts(data){
    $scope.products = data;
    $scope.product = {};
  }

  $scope.product = {};
  $scope.products = {};

  $scope.index = function(){
    productFactory.index(setProducts);
  }

  $scope.index();

  $scope.buy = function(id){
    console.log(id);
    console.log($scope.products);
    productFactory.buy(id,setProducts);
  }

}]);
