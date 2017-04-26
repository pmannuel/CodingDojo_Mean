console.log('productsController ACTIVATED');

var app = angular.module('app');

app.controller('productsController',
    [
        '$scope',
        '$location',
        '$cookies',
        'productsFactory',
        function($scope, $location, $cookies, productsFactory) {
            console.log('@productsController.js');

            var showAllProducts = function() {

                productsFactory.showAllProducts(function(data) {
                    console.log('***** RETURNED DATA: all products *****');
                    console.log(data);
                    $scope.products = data;
                });
            }
            showAllProducts();

            $scope.addProduct = function() {

                productsFactory.addProduct($scope.newProduct, function(data) {
                    console.log('***** RETURNED DATA: new product *****');
                    console.log(data);

                    if(data.data.name) {
                        console.log('Success: product added')
                        $location.url('/products')
                    }
                    if(data.data.errors) {
                        console.log(data.data.errors);
                        $scope.Errors = data.data.errors;
                    }
                });

                $scope.newProduct = {};
                $location.url('/');
            }

        }
    ]
);
