module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server)

	var count = 0;
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){

		//server listens to "posting_form" event
	 	socket.on("button_clicked", function (data){
			console.log(count);
	 		count += 1;
			io.emit('updated_message', {response: count.toString()});
		})

		socket.on("reset_counter", function (data){
			counter = 0;
			io.emit('reset_response', {response: counter});
		})
	})
};
