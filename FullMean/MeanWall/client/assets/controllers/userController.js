console.log('User Controller ACTIVATED');

var app = angular.module('app');

app.controller('userController',
    [
        '$scope',
        '$location',
        '$cookies',
        'usersFactory',
        function($scope, $location, $cookies, usersFactory) {
            console.log('@userController.js');
            $cookies.remove('loginId')

            $scope.addUser = function() {

                if($scope.newUser.password != $scope.newUser.confirmPassword) {
                    $scope.CPError = false
                    $scope.confirmPasswordError = "Password must match"
                }

                usersFactory.addUser($scope.newUser, function(data) {
                    console.log('***** RETURNED DATA *****');
                    console.log(data);

                    var user = data.data;

                    if(user.firstName) {
                      console.log('Success: User Added')
                      $cookies.put('loginId', user._id)
                      $location.url('/wall')
                    }
                    if(data.data.errors) {
                      $scope.firstNameError = user.errors.firstName.message
                      $scope.lastNameError = user.errors.lastName.message
                      $scope.birthdayError = user.errors.birthday.message
                      $scope.emailError = user.errors.email.message
                      $scope.passwordError = user.errors.password.message
                    }
                });

                $scope.newUser = {};
                $location.url('/');
            }

            $scope.login = function() {
                usersFactory.login($scope.user, function(data) {
                    console.log('***** RETURNED DATA *****');
                    console.log(data);

                    if(data.firstName) {
                      console.log('Success: User Logged In')
                      $cookies.put('loginId', data._id)
                      $location.url('/wall')
                    }
                    else {
                      $scope.noEmail = data.noEmail
                      $scope.incorrectPassword = data.IncorrectPassword
                      $scope.user = {};
                      $location.url('/');
                    }
                });
            }
        }
    ]
);
