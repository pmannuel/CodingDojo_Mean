var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/users.html',
        controller: 'usersController',
    })

    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeController',
    })

    .when('/user/:id', {
        templateUrl: 'partials/user.html',
        controller: 'userController',
    })

    .otherwise('/');
});
