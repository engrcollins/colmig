const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    msgTitle: String,
    name: String,
    msgContent: String,
    date: String
});

const User = mongoose.model('User', UserSchema);


module.exports = User;