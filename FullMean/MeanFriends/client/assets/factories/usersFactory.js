console.log('Users Factory');

app.factory('usersFactory', ['$http', function($http) {

  var users = [];
  var user = {};
  var factory = {};

    factory.getUser = function(id, callback) {
        $http.get('/users/' +id).then(function(returned_data){
            user = returned_data.data
            callback(user)
          })
    }

    factory.create = function(newuser,callback){
        console.log('New user in factory');
        console.log(newuser);
      $http.post('/users', newuser).then(function(returned_data){
        user = returned_data.data;
        console.log('In Function');
        console.log(returned_data);

        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    factory.update = function(editedUser, id, callback){
      $http
        .put('/users/' + id, editedUser)
        .then(function(returned_data){
          users = returned_data.data;

          if (typeof(callback) == 'function'){
            callback(users);
          }
        });
    };

    factory.index = function(callback){

      $http.get('/users').then(function(returned_data){
        users = returned_data.data;
        callback(users);
      });
    };

    factory.delete = function(user_id){// what parameters do we need?
        $http.delete('/users/' + user_id).then(function(data){
            console.log("success removing the user")
          })
    };

    return factory;
}]);
