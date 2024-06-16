const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { getLogHistoryMessages } = require('../controllers/logHistory');


/*
    broadcast Routes
    host + /api/logHistory
*/

router.get('/getLogHistory', getLogHistoryMessages);

module.exports = router;