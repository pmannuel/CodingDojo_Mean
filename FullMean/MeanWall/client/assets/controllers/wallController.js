console.log('Wall Controller ACTIVATED');

var app = angular.module('app');

app.controller('wallsController',
    [
        '$scope',
        '$location',
        '$cookies',
        'wallsFactory',
        function($scope, $location, $cookies, wallsFactory) {
            console.log('@wallController.js');

            $scope.signout = function() {
                $cookies.remove('loginId');
                $location.url('/');
            }

            $scope.postMessage = function() {

                $scope.newMessage._user = $cookies.get('loginId');

                console.log('SENDING A NEW MESSAGE');
                console.log($scope.newMessage);

                wallsFactory.addMessage($scope.newMessage, function(data) {
                    console.log('***** RETURNED New Message *****');
                    console.log(data);

                    if(data.content) {
                      console.log('Success: New message is up')
                      $scope.newMessage = {};
                      allMessages();
                      $location.url('/wall')
                    }
                    if(data.errors) {
                      console.log(data.errors);
                      $location.url('/wall')
                    }
                });
            }
            $scope.newComment = {};

            $scope.postComment = function(messageId, i) {

                $scope.newComment[i]._user = $cookies.get('loginId');
                $scope.newComment[i]._message = messageId;

                console.log('SENDING A NEW COMMENT');
                console.log($scope.newComment[i]);

                wallsFactory.addComment($scope.newComment[i], function(data) {
                    console.log('***** RETURNED New Comment *****');
                    console.log(data);

                    if(data.content) {
                      console.log('Success: New comment is up')
                      $scope.newComment[i] = {};
                      allMessages();
                      $location.url('/wall')
                    }
                    if(data.errors) {
                      console.log(data.errors);
                      $location.url('/wall')
                    }
                });

            }

            var currentUser = function() {

                var loginId = $cookies.get('loginId')
                console.log(loginId);

                wallsFactory.findCurrentUser(loginId, function(data) {
                    console.log('***** RETURNED DATA *****');
                    console.log(data);
                    $scope.currentUser = data;
                });
            }

            currentUser();

            var allMessages = function() {

                wallsFactory.allMessages(function(data) {
                    console.log('***** RETURNED DATA: ALL MESSAGES *****');
                    console.log(data);
                    $scope.messages = data;
                });
            }

            allMessages();
        }
    ]
);
