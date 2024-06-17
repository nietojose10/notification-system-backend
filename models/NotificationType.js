const { Schema, model } = require('mongoose');

const NotificationTypeSchema = Schema({
    notificationType:{
        type: String,
        required: true
    }
})

module.exports = model('NotificationType', NotificationTypeSchema );