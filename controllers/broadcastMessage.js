const { response } = require('express');
const LogHistory = require('../models/LogHistory');
const User = require('../models/User');
const { handleSMSProcess } = require('../helpers/smsProcess');
const { handleNotificationProcess } = require('../helpers/notificationProcess');

const broadcastMessage = async( req, res = response ) => {

    console.log(req.body);

    try {

        const { category, message } = req.body;
        const users = await User.find({ subscribed: category.toLowerCase() }); 
        const usersSMS = users.filter( user => user.channels.includes('sms') );
        const usersNotification = users.filter( user => user.channels.includes('push notification') );
        const usersEmail = users.filter( user => user.channels.includes('email') );
        let messagesSent = [];

        usersSMS.forEach((user) => {
            handleSMSProcess({ message, category, channel: 'sms', user: user._id, creationDate: new Date() })
            .then( result => {
                const { messageData } = result;
                const messageRecorded = new LogHistory({ message: messageData.message, typeMessage: messageData.category, channel: messageData.channel, user: messageData.user, creationDate: messageData.creationDate  });
                return messageRecorded.save();
            })
            .then( messageRecorded => messagesSent.push( messageRecorded ) )
            .catch( error => console.log(error) );
        });

        usersNotification.forEach((user) => {
            handleNotificationProcess({ message, category, channel: 'push notification', user: user._id, creationDate: new Date() })
            .then( result => {
                const { messageData } = result;
                const messageRecorded = new LogHistory({ message: messageData.message, typeMessage: messageData.category, channel: messageData.channel, user: messageData.user, creationDate: messageData.creationDate  });
                return messageRecorded.save();
            })
            .then( messageRecorded => messagesSent.push( messageRecorded ) )
            .catch( error => console.log(error) );
        });

        usersEmail.forEach((user) => {
            handleNotificationProcess({ message, category, channel: 'email', user: user._id, creationDate: new Date() })
            .then( result => {
                const { messageData } = result;
                const messageRecorded = new LogHistory({ message: messageData.message, typeMessage: messageData.category, channel: messageData.channel, user: messageData.user, creationDate: messageData.creationDate  });
                return messageRecorded.save();
            })
            .then( messageRecorded => messagesSent.push( messageRecorded ) )
            .catch( error => console.log(error) );
        });

        res.status(200).json({
            ok: true,
            messagesSent: messagesSent
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Get in touch with the platform admin.'
        });
    }

}

module.exports = { broadcastMessage };