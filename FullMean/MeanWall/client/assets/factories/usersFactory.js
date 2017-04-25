console.log('Users Factory');

app.factory('usersFactory', ['$http', function($http) {
    var users = [];
    var user = {};
    var factory = {};

    factory.addUser = function(newUser, callback){
        console.log("addUser . . .")
        $http.post('/user', newUser).then(function(data){
            console.log("addUser data returned")
            console.log(data.data)

                console.log('####################')
                console.log(data)
              callback(data);
        })
    };

    factory.login = function(user, callback){
        $http.post('/login', user).then(function(returned_data){
            console.log("login data returned")
            console.log(returned_data)

            user = returned_data.data
            if(user.noEmail || user.IncorrectPassword){
                callback(user);
            }
            else if (user._id) {
                loginId = user._id
                callback(user);
            }
        })
    };

    return factory;
}]);
