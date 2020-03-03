const express = require('express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch undefined routes and respond with 404
app.use((req, res, next) => {
  res.status(404).send('Sorry can not find that!');
  next();
});

// catch server errors and respond with 500
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
  next();
});

module.exports = app;
