const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;

// const Sequelize = require('sequelize');
//
// const sequelize = new Sequelize('postgres://localhost:5432/jeff');
//
// sequelize
//    .authenticate()
//    .then(() => {
//       console.log('Connection to database was established');
//    }).catch(err => {
//       console.log('Unable to connect to database', err);
//    });
//
// const User = sequelize.define('user', {
//    firstName: {
//       type: Sequelize.STRING
//    },
//    lastName: {
//       type: Sequelize.STRING
//    }
// });
//
// User.sync({force:true}).then(() => {
//    return User.create({
//       firstName: 'Patrick',
//       lastName: 'Ellis'
//    });
// });
//
// User.findAll().then(users => {
//    console.log(users)
// });
