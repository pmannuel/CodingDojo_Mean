var app = angular.module('app');

app.controller('showallController',
    [
        '$scope',
        'usersFactory',
        function($scope, usersFactory) {
          var index = function () {
              usersFactory.index(function(data) {
                  console.log(data);
                  $scope.users = data;
              })
          }
          index();

          $scope.delete = function(id) {
              usersFactory.delete(id);
          }
}]);

app.controller('showoneController',
    [
        '$scope',
        'usersFactory',
        '$routeParams',
        function ($scope, usersFactory, $routeParams) {
          usersFactory.getUser($routeParams._id, function (data){
            $scope.user = data;
        }, $routeParams.id)

}]);
