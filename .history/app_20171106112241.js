const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const promise = mongoose.connect(config.database, {
    useMongoClient: true,
  });
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
  console.log('connected to database' + config.database); });
mongoose.connection.on('error', () => {
  console.log('database error ' + error); });

//mongoose.connection.on('');

const app = express();
const users = require('./routes/users');
const port = 3000;

app.use(cors());

//set static folder, app will serve from here in prod
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.get('/', (req, res) => {
    res.send('Invalid End point');
  });

  
app.listen(port, () => {
    console.log('Server started on port ' + port);
  });
