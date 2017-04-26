console.log('userController ACTIVATED');

var app = angular.module('app');

app.controller('userController',
    [
        '$scope',
        '$location',
        '$cookies',
        '$routeParams',
        'userFactory',
        function($scope, $location, $cookies, $routeParams, userFactory) {
            console.log('@userController.js');

            var visitedUser = function() {

                userFactory.findUser($routeParams.id, function(data) {
                    // console.log('***** RETURNED DATA *****');
                    // console.log(data);
                    $scope.visitedUser = data;
                });
            }
            visitedUser();

            $scope.logout = function() {
                $cookies.remove('loginId');
                $location.url('/');
            }

            var showWishes = function() {

                userFactory.showWishes($routeParams.id, function(data) {
                    // console.log('***** RETURNED DATA: all other users *****');
                    // console.log(data);
                    $scope.wishes = data;
                });
            }
            showWishes();

            $scope.updateCompletion = function(wishId) {
                console.log('updating wish id: ' + wishId);

                var loginId = $cookies.get('loginId')

                userFactory.updateCompletion(wishId, loginId, function(data){
                    console.log('***** RETURNED DATA *****');
                    console.log(data);
                    $scope.error_message = '';
                    if (data.error) {
                        $scope.error_message = data.error;
                    }
                    visitedUser();
                    showWishes();

                })
            }
        }
    ]
);
