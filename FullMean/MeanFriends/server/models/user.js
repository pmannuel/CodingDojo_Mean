console.log('user model');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date
});
mongoose.model('User', UserSchema);
