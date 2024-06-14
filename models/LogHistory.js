const { Schema, model } = require('mongoose');

const LogHistorySchema = Schema({
    message: {
        type: String,
        required: true,
        trim: true
    },
    typeMessage: {
        type: String,
        required: true
    },
    channel:{
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    }
});

module.exports = model('LogHistory', LogHistorySchema);