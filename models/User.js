const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    subscribed: {
        type: [String],
        
    },
    channels: {
        type: [String],
    },
    creationDate: {
        type: Date,
        required: true
    }
});

module.exports = model('User', UserSchema);