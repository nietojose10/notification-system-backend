const { response } = require('express');
const MessageType = require('../models/MessageType');
const NotificationType = require('../models/NotificationType');

const createMessageType = async( req, res = response ) => {
    try {

        const messageType = new MessageType( req.body );
        const newMessageType = await messageType.save();
        
        res.status(201).json({
            ok:true,
            messageType: newMessageType
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Get in touch with the platform admin.'
        });
    }
}

const createNotificationType = async( req, res = response ) => {
    try {

        const notificationType = new NotificationType( req.body );
        const newNotificationType = await notificationType.save();

        res.status(201).json({
            ok:true,
            notificationType: newNotificationType
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Get in touch with the platform admin.'
        });
    }
}

const getMessageTypes = async( req, res = response) => {
    try {
        
        const messagesTypes = await MessageType.find().exec();

        res.status(200).json({
            ok:true,
            messageTypes: messagesTypes
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Get in touch with the platform admin.'
        });
    }
}

const getNotificationTypes = async( req, res = response ) => {
    try {
        
        const notificationTypes = await NotificationType.find().exec();

        res.status(200).json({
            ok:true,
            notificationTypes: notificationTypes
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Get in touch with the platform admin.'
        });
    }
}

module.exports = { createMessageType, createNotificationType, getMessageTypes, getNotificationTypes }