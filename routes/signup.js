const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpwd;
    console.log(username, email, password, confirmpassword);
})

module.exports = router;