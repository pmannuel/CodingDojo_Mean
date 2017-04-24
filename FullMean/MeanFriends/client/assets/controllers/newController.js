console.log('New Controller Activated!');

var app = angular.module('app');

app.controller('newController',
    [
        '$scope',
        'usersFactory',
        function($scope, usersFactory) {
          $scope.create = function() {
              console.log($scope.newUser);
              usersFactory.create($scope.newUser, function(data) {
                  $scope.users = data;
              });
          }
}]);
