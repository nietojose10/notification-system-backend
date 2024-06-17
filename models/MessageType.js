const { Schema, model } = require('mongoose');

const MessageTypeSchema = Schema({
    messageType:{
        type: String,
        required: true
    }
})

module.exports = model('MessageType', MessageTypeSchema );