const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

mod