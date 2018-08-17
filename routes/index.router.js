const express = require('express');
const router =  express.Router();

const ctrluser = require('../controllers/user.controller');

router.post('/register', ctrluser.register);

module.exports = router;
