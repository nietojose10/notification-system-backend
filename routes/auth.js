const { Router } = require('express');
const { createUser } = require('../controllers/auth');
const router = Router();

/*
    Auth Routes
    Host + /api/auth
*/

router.post('/new', createUser );

module.exports = router;