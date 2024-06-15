const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { broadcastMessage } = require('../controllers/broadcastMessage');


/*
    broadcast Routes
    host + /api/broadcast
*/

router.post('/sendMessage', broadcastMessage );

module.exports = router;