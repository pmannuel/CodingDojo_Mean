var mongoose = require('mongoose')
var User = mongoose.model('User');
var Message = mongoose.model('Message');
var Note = mongoose.model('Note');

module.exports = {
    index : function(req,res){
        Message.find({})
        .populate('_user')
        .populate('notes')
        .exec(function(err, returned_data){

            res.json(returned_data);

        })
    },
    createM : function(req,res){
        console.log('Creating message');

        Message.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log('Error in posting message');
                console.log(err)
                res.json(err)
            }else{
                console.log('successfully posted message');
                console.log(data)
                res.json(data)
            }
        })
    },
    createC : function(req,res){
        console.log('Creating a new comment/note');

        Message.findOne({_id:req.body._message}, function(err, message){
            if(err){
                console.log(err);
            }
            else{
                Note.create(req.body, function(err, note){
                    console.log(req.body);
                    if(err){
                        console.log('Error in posting comment');
                        console.log(err)
                        res.json(err)
                    }else{
                        console.log('successfully posted comment');

                        message.notes.push(note);
                        message.save();
                        res.json(note)
                    }
                })
            }
        })

    },
}
