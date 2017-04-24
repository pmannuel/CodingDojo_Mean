var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'newController',
    })

    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'showallController',
    })

    .when('/edit/:_id', {
        templateUrl: 'partials/edit.html',
        controller: 'editController',
    })

    .when('/show/:_id', {
        templateUrl: 'partials/show.html',
        controller: 'showoneController',
    })

    .otherwise('/home');
});
