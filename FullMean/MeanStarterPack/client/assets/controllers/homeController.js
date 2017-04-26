console.log('homeController ACTIVATED');

var app = angular.module('app');

app.controller('homeController',
    [
        '$scope',
        '$location',
        '$cookies',
        'homeFactory',
        function($scope, $location, $cookies, homeFactory) {
            console.log('@homeController.js');

            var currentUser = function() {

                var loginId = $cookies.get('loginId')
                console.log(loginId);

                homeFactory.findCurrentUser(loginId, function(data) {
                    console.log('***** RETURNED DATA *****');
                    console.log(data);
                    $scope.currentUser = data;
                });
            }
            currentUser();

            $scope.logout = function() {
                $cookies.remove('loginId');
                $location.url('/');
            }
        }
    ]
);
