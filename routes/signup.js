const express = require('express');
const app = express();
const router = express.Router();
const User = require('../models/user');
const cryptoJS = require('crypto-js');


router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/',async (req, res) => {
    const newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    try{
        const savedUser = await newuser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;