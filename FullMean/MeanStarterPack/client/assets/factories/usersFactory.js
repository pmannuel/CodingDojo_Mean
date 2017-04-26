console.log('Users Factory');

app.factory('usersFactory', ['$http', function($http) {

  var users = [];
  var user = {};
  var factory = {};

  factory.login = function(user, callback){
      $http.post('/login', user).then(function(data){
          console.log("***** RETURNED DATA *****")
          console.log(data.data)

          if (data.data.name) {
              callback(data);
          }
          else if (data.data.failure) {
              $http.post('/create', user).then(function(data){
                  console.log("***** RETURNED DATA *****")
                  console.log(data.data)

                  if (data.data.name) {
                      console.log("Success: created new user")
                      callback(data);
                  }
                  else if (data.failure) {
                      console.log("Failure: created new user")
                      callback(data);
                  }
              })
          }
      })
  };

    return factory;
}]);
