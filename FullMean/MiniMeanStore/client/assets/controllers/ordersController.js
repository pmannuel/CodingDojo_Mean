console.log('ordersController ACTIVATED');

var app = angular.module('app');

app.controller('ordersController',
    [
        '$scope',
        '$location',
        '$cookies',
        'ordersFactory',
        function($scope, $location, $cookies, ordersFactory) {
            console.log('@ordersController.js');

            var showAllOrders = function() {

                ordersFactory.showAllOrders(function(data) {
                    console.log('***** RETURNED DATA: all orders *****');
                    console.log(data);
                    $scope.orders = data;
                });
            }
            showAllOrders();

            var showAllProducts = function() {

                ordersFactory.showAllProducts(function(data) {
                    console.log('***** RETURNED DATA: all products *****');
                    console.log(data);
                    $scope.products = data;
                });
            }
            showAllProducts();

            var showAllUsers = function() {

                ordersFactory.showAllUsers(function(data) {
                    console.log('***** RETURNED DATA: all users *****');
                    console.log(data);
                    $scope.users = data;
                });
            }
            showAllUsers();

            $scope.addOrder = function() {

                ordersFactory.addOrder($scope.newOrder, function(data) {
                    console.log('***** RETURNED DATA: new order *****');
                    console.log(data);

                    if(data.data.name) {
                        console.log('Success: order added')
                        $location.url('/orders')
                    }
                    if(data.data.errors) {
                        console.log(data.data.errors);
                        $scope.Errors = data.data.errors;
                    }
                });

                showAllUsers();
                showAllProducts();
                showAllOrders();
                $location.url('/orders');
            }

        }
    ]
);
