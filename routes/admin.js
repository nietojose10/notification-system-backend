const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { createMessageType, createNotificationType, getMessageTypes, getNotificationTypes } = require('../controllers/admin');


/*
    Admin Routes
    host + /api/admin
*/

router.post('/newMessageType', createMessageType );

router.post('/newNotificationType', createNotificationType );

router.get('/getMessageTypes', getMessageTypes);

router.get('/getNotificationTypes', getNotificationTypes);

module.exports = router;