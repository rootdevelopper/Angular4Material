const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;