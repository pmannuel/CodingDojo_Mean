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

            var showAllUsers = function() {

                usersFactory.showAllUsers(function(data) {
                    console.log('***** RETURNED DATA: all users *****');
                    console.log(data);
                    $scope.users = data;
                });
            }
            showAllUsers();

            $scope.addUser = function() {

                usersFactory.addUser($scope.newUser, function(data) {
                    console.log('##### RETURNED DATA: new user #####');
                    console.log(data.data);

                    if(data.data.errors) {
                        console.log('Failure: user added')
                        console.log(data.data.errors);
                        $scope.errors = data.data.errors.name.message;
                        $location.url('/customers')
                    }
                    else {
                        console.log('Success: user added')
                        $location.url('/customers')
                    }
                });
            }

        }
    ]
);
