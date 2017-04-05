var users = [];

var messages = [];

var user_exist = function(user) {

  for (var i = 0; i < users.length; i++) {
    if (user == users[i]) {
      return true;
    }
  }
  return false;
}


module.exports = function Route(app, server) {
  var io = require("socket.io").listen(server)

  io.sockets.on("connection", function(socket){
    socket.on("page_load", function(data){
      if(user_exist(data.user) === true) {
        socket.emit("existing_user", {error: "This user already exits"})
      } else {
        users.push(data.user);
        socket.emit("load_messages", {current_user: data.user, messages: messages})
      }
    })

    socket.on("new_message", function(data){
      console.log(messages);
      messages.push({name: data.user, message: data.message})
      io.emit("post_new_message", {new_message: data.message, user: data.user})
    })
  })

  app.get("/", function(request, response){
    response.render("index")
  })
}
