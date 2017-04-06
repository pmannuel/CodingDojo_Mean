module.exports = function Route(app, User){

    app.get('/', function(req, res) {

    	User.find({}, function(err, users){

    		if(err){
    			console.log('Failed to load users from database');
    		} else {
    			console.log('success');
    		}
    		console.log(users);
    		res.render('index', {users: users});
    	})
    })

    app.post('/users', function(req, res) {
     console.log("POST DATA", req.body);
     // This is where we would add the user from req.body to the database.
     var user = new User({name: req.body.name, age: req.body.age});
     user.save(function(err){
     	if(err){
     		console.log('Something went wrong...')
     	} else {
     		console.log('Successfully added user to database.')
     		res.redirect('/');
     	}
     })
    })
};
