console.log('users model UP');

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    firstName : {
    	type: String,
    	required: [true, 'First name is required'],
    	minlength: [2, 'First name must be at least 2 characters'],
    	trim: true
    },
    lastName : {
    	type: String,
    	required: [true, 'Last name is required'],
    	minlength: [2, 'Last name must be at least 2 characters'],
    	trim: true
    },
    email : {
    	type: String,
    	validate: {
    		validator: function(email) {
    		    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    		    return emailRegex.test(email)
    		},
    		message: 'Not a valid email'
    	},
    required: [true, "Email is required"],
    unique: true
    },
    birthday: {
        type: Date,
        required: [true, 'Birthday is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        validate: {
            validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    created_at: {
        type : Date,
        default: Date.now
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
});

UserSchema.methods.generateHash = function(password) {
	if(password.length > 32) {
		return password
	} else {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
	}
}

UserSchema.pre('save', function(done) {
	this.password = this.generateHash(this.password);
	done();
})

UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema);
