const mongoose =  require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema =  new mongoose.Schema({
    fullName: {
        type:String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type:String,
        required: 'email can\'t be empty'
    },
    password: {
        type:String,
        required: 'Password can\'t be empty'
    },
    //used for encryption and decryptyion
    saltSecret: String
});

//custom validation
userSchema.path('email').validate((val) => {
    emailval = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailval.test(val);
}, 'Invalid email');

//events
userSchema.pre('save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

//register user schema objecct in mongoose
mongoose.model('User',userSchema);