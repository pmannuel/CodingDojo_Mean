module.exports = function Route(app, Message, Comments){

    app.get('/', function(req, res) {
        // Message.remove({}, function(err){})
        // Comments.remove({}, function(err){})
        console.log(Comments);
        Message.find({}).populate('comments').exec(function(err, messages) {
            res.render('index', {messages: messages});
        });
    })

    app.post("/message", function(req, res){
    	var newMessage = new Message({name: req.body.name, text: req.body.message});
    	newMessage.save(function(err){
    		if(err){
    			console.log("cannot post message");
    			res.render('index', {errors: newMessage.errors});
    		} else {
    			console.log("success");
    			res.redirect('/');
    		}
    	})
    })

    app.post("/comment/:message_id", function(req, res){
    	Message.findOne({_id: req.params.message_id}, function(err, message){
    		var newcomment = new Comments(req.body);
    		newcomment._message = message._id;

    		newcomment.save(function(err){
    			if(err){
    				console.log(err);
    				res.render('index', {errors: newcomment.errors});
    			}
                else {
    				console.log("comment added");

                    message.comments.push(newcomment);
                    message.save(function(err){
                        if(err) {
                            console.log(err);
            				res.render('index', {errors: message.errors});
                        }
                        else {
                            res.redirect('/');
                        }
                    });
    			}
    		});
    	});
    });

};
