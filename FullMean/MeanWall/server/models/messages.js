console.log('message model UP');
console.log('comment model UP');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    content: {
        type: String,
        required: [true, "Message cannot be empty"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
});

mongoose.model('Message', MessageSchema);

var NoteSchema = new Schema({
  content: {
      type: String,
      required: [true, "Note Text is required"]
  },
  created_at: {
      type : Date,
      default: Date.now
  },
  _message: {
      type: Schema.Types.ObjectId,
      ref: 'Message'
  },
  _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
  });
mongoose.model('Note', NoteSchema);
