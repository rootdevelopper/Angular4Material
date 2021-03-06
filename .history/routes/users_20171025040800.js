const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
        if(err) { res.json({success: false, msg:'Failed to register user'});
    } else {
        res.json({res.json({success: true})});
    }
    });
   // res.send('REGISTER');
});

router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;