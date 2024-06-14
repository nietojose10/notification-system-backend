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
        type: [{
            typeMessageId: Schema.Types.ObjectId,
            typeMessage: String
        }],
        required: true
    },
    channels: {
        type: [{
            channelId: Schema.Types.ObjectId,
            channel: String
        }],
        required: true
    }
});

module.exports = model('User', UserSchema);