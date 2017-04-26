console.log('usersController ACTIVATED');

var app = angular.module('app');

app.controller('usersController',
    [
        '$scope',
        '$location',
        '$cookies',
        'usersFactory',
        function($scope, $location, $cookies, usersFactory) {
            console.log('@usersController.js');

            $cookies.remove('loginId')
            console.log($cookies.get('loginId'));

            $scope.login = function() {
                usersFactory.login($scope.user, function(data) {
                    console.log('***** RETURNED DATA *****');
                    console.log(data.data);

                    if(data.data.errors) {
                        console.log('Failure: User Logged In')
                        $scope.user = {};
                        $scope.error = data.data.errors.name.message;
                        $location.url('/');
                    }
                    else if(data.data.name){
                        console.log('Success: User Logged In')
                        $cookies.put('loginId', data.data._id)
                        $location.url('/home');
                    }
                });
            }
        }
    ]
);
