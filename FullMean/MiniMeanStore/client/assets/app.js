var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardController',
    })

    .when('/products', {
        templateUrl: 'partials/products.html',
        controller: 'productsController',
    })

    .when('/orders', {
        templateUrl: 'partials/orders.html',
        controller: 'ordersController',
    })

    .when('/customers', {
        templateUrl: 'partials/users.html',
        controller: 'usersController',
    })

    .otherwise('/');
});
