const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//User Schema - Datenbankaufbau
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userRights: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'UserRights' 
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    hasToRelog: {
        type: Boolean,
        default: false
    },
    secret: {
        type: String
    },
    clearName: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
});


//User extern verfügbar machen
const User = module.exports = mongoose.model('User', UserSchema);


//Finde Benutzer mit seiner ID
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

//Finde Benutzer nach Benutzernamen
module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

//Benutzer anlegen
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback)
        });
    });
}

module.exports.isAdmin = function(user, callback) {
    this.getUserById(user, function (err, user) {
        return user.isAdmin;
    });
    return false;
}


//Passwortüberprüfung Login <-> DB
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}