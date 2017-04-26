console.log('Home Factory');

app.factory('homeFactory', ['$http', function($http) {

    var users = [];
    var user = {};
    var factory = {};

    factory.findCurrentUser = function(loginId, callback){
        console.log("@Walls Factory")
        console.log("*** LOGIN ID ***")
        console.log(loginId)
        $http.get('/user/'+ loginId).then(function(data){
            console.log("*** RETURNED DATA ***")
            console.log(data.data)

            callback(data.data);
        })
    };

    return factory;
}]);
