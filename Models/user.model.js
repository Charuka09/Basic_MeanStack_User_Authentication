const mongoose =  require('mongoose');

var userSchema =  new mongoose.Schema({
    fullName: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    },
    //used for encryption and decryptyion
    saltSecret: String
});

//register user schema objecct in mongoose
mongoose.model('User',userSchema);