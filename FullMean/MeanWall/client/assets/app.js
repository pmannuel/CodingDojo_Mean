var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/user.html',
        controller: 'userController',
    })

    .when('/wall', {
        templateUrl: 'partials/wall.html',
        controller: 'wallsController',
    })

    .otherwise('/');
});
