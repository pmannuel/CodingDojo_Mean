var app = angular.module('app');

app.controller('editController',
  [
    '$scope',
    '$routeParams',
    '$location',
    'usersFactory',
    function($scope, $routeParams, $location, usersFactory){ //if injected above dont forget to add in as an argument

        usersFactory.getUser($routeParams._id, function (data){
          $scope.user = data;
        }, $routeParams.id)

        $scope.update = function() {

            usersFactory.update($scope.editedUser, $routeParams._id, function(return_data) {
            console.log(return_data);
            $location.url('/home');
        });

      }
    }
  ]
);
