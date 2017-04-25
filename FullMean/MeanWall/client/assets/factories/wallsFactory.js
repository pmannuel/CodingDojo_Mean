console.log('Walls Factory');

app.factory('wallsFactory', ['$http', function($http) {
    var users = [];
    var user = {};
    var factory = {};

    factory.findCurrentUser = function(loginId, callback){
        console.log("@Walls Factory")
        $http.get('/currentUser/'+ loginId).then(function(returned_data){
            console.log("login data returned")
            console.log(returned_data)

            callback(returned_data.data);
        })
    };

    factory.allMessages = function(callback){

      $http.get('/messages').then(function(returned_data){
          messages = returned_data.data;
          console.log('All the messages:');
          console.log(messages);
        callback(messages);
      });
    };

    factory.addMessage = function(newMessage, callback){

      $http.post('/message/create', newMessage).then(function(returned_data){
          message = returned_data.data;
          console.log('New message:');
          console.log(message);
        callback(message);
      });
    };

    factory.addComment = function(newComment, callback){

      $http.post('/comment/create', newComment).then(function(returned_data){
          note = returned_data.data;
          console.log('New comment:');
          console.log(note);
        callback(note);
      });
    };

    return factory;
}]);
