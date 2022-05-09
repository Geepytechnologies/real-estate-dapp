const express = require('express');
const app = express();

// routes
const index = require('./routes/index');
const login = require('./routes/login');
const signup = require('./routes/signup');
const properties = require('./routes/properties');
const success = require('./routes/ver-success');
const otp = require('./routes/otp-screen');

// routes definition
app.use('/', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/properties', properties);
app.use('/success', success);
app.use('/otp', otp);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});