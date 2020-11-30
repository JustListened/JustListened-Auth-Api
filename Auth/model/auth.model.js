var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    email: String,
    password: String 
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');