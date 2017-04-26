console.log('Users Factory');

app.factory('usersFactory', ['$http', function($http) {

  var users = [];
  var user = {};
  var factory = {};

    factory.showAllUsers = function(callback){

      $http.get('/users').then(function(data){
        users = data.data;
        callback(users);
      });
    };

    factory.addUser = function(newUser, callback){
        console.log("@factory.addUser")
        $http.post('/user/create', newUser).then(function(data){
            console.log("***** RETURNED DATA: data.data *****")
            console.log(data.data)
            callback(data);
        })
    };

    return factory;
}]);
