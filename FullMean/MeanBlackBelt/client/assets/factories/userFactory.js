console.log('User Factory');

app.factory('userFactory', ['$http', function($http) {

    var users = [];
    var user = {};
    var factory = {};

    factory.findUser = function(userId, callback){
        console.log("@Walls Factory")

        $http.get('/user/'+ userId).then(function(data){
            // console.log("*** RETURNED DATA ***")
            // console.log(data.data)

            callback(data.data);
        })
    };

    factory.showWishes = function(loginId, callback){

      $http.get('/wishes/' + loginId).then(function(data){
        wishes = data.data;
        callback(wishes);
      });
    };

    factory.updateCompletion = function(wishId, loginId, callback){

      $http.get('/wish/' + wishId + '/currentuser/' + loginId).then(function(data){
        wish = data.data;
        callback(wish);
      });
    };

    return factory;
}]);
