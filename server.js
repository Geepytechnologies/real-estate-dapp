if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config('')
}
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



// routes
const index = require('./routes/index');
const login = require('./routes/login');
const signup = require('./routes/signup');
const properties = require('./routes/properties');
const success = require('./routes/ver-success');
const otp = require('./routes/otp-screen');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes definition
app.use('/', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/properties', properties);
app.use('/success', success);
app.use('/otp', otp);

// connecting to mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'));

/* app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
})
 */
app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});