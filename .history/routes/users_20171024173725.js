const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

module.exports = router;