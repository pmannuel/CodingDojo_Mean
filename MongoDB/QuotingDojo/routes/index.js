module.exports = function Route(app, Quote){

    app.get('/', function(req, res) {

    	Quote.find({}).sort({'createdAt': 'desc'}).exec(function(err, quotes){

    		if(err){
    			console.log('Failed to load quotes from database');
    		} else {
    			console.log('success');
    		}
    		console.log(quotes);
    		res.render('index', {quotes: quotes});
    	})
    })

    app.post('/quotes', function(req, res) {
     console.log("POST DATA", req.body);
     // This is where we would add the user from req.body to the database.
     var quote = new Quote({name: req.body.name, quote: req.body.quote});
     quote.save(function(err){
     	if(err){
     		console.log('Something went wrong...')
            res.render('errors', {errors: quote.errors});
     	} else {
     		console.log('Successfully added user to database.')
     		res.redirect('/');
     	}
     })
    })
};
