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

            var showOtherUsers = function() {

                var loginId = $cookies.get('loginId')
                console.log(loginId);

                homeFactory.showOtherUsers(loginId, function(data) {
                    console.log('***** RETURNED DATA: all other users *****');
                    console.log(data);
                    $scope.otherUsers = data;
                });
            }
            showOtherUsers();

            var showWishes = function() {

                var loginId = $cookies.get('loginId')

                homeFactory.showWishes(loginId, function(data) {
                    console.log('***** RETURNED DATA: all other users *****');
                    console.log(data);
                    $scope.wishes = data;
                });
            }
            showWishes();

            $scope.logout = function() {
                $cookies.remove('loginId');
                $location.url('/');
            }

            $scope.updateCompletion = function(wishId) {
                var loginId = $cookies.get('loginId')

                homeFactory.updateCompletion(wishId,  loginId, function(data){
                    console.log(data);
                    currentUser();
                    showOtherUsers();
                    showWishes();
                    $location.url('/home');
                })
            }

            $scope.addWish = function() {
                $scope.newWish._user = $cookies.get('loginId');

                homeFactory.addWish($scope.newWish, function(data) {
                    console.log('***** RETURNED DATA: all other users *****');
                    console.log(data.data);
                    $scope.error_message_title = '';
                    $scope.error_message_description = '';
                    if (data.data.errors) {
                        $scope.error_message_title = data.data.errors.title.message;
                        $scope.error_message_description = data.data.errors.description.message;
                    }
                    $scope.newWish = {};
                    showWishes();
                    $location.url('/home');
                });
            }
        }
    ]
);
