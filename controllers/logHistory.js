const { response } = require('express');
const LogHistory = require('../models/LogHistory');

const getLogHistoryMessages = async( req, res = response ) => {

    try {
        
        const getMessages = await LogHistory.find().populate('user').sort({ creationDate: 'desc' }).exec();
        console.log(getMessages);

        res.status(200).json({
            ok: true,
            messages: getMessages
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Please get in touch with the admin.'
        });
    }
}

module.exports = { getLogHistoryMessages }; 