console.log('Home Factory');

app.factory('homeFactory', ['$http', function($http) {

    var users = [];
    var user = {};
    var factory = {};

    factory.findCurrentUser = function(loginId, callback){
        console.log("@Walls Factory")

        $http.get('/user/'+ loginId).then(function(data){
            console.log("*** RETURNED DATA ***")
            console.log(data.data)

            callback(data.data);
        })
    };

    factory.showOtherUsers = function(loginId, callback){

      $http.get('/users/other/'+ loginId).then(function(data){
        otherUsers = data.data;
        callback(otherUsers);
      });
    };

    factory.showWishes = function(loginId, callback){

      $http.get('/wishes/' + loginId).then(function(data){
        wishes = data.data;
        callback(wishes);
      });
    };

    factory.updateCompletion = function(wishId,  loginId, callback){

      $http.get('/wish/' + wishId + '/currentuser/' + loginId).then(function(data){
        wish = data.data;
        callback(wish);
      });
    };

    factory.addWish = function(newWish, callback){

      $http.post('/wish/create', newWish).then(function(data){
            console.log("***** RETURNED DATA: data.data *****")
            console.log(data.data)
            callback(data);
      });
    };

    return factory;
}]);
