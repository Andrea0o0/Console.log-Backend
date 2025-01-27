require('dotenv').config();
require('./db');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { Octokit, App } = require("octokit");

// Routers require
const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const kataRouter = require('./routes/kata');
const solutionsRouter = require('./routes/solutions');
const likesRouter = require('./routes/likes');
const commentsRouter = require('./routes/comments');
const championsRouter = require('./routes/champions')
const adminRouter = require('./routes/admin')

const app = express();

// cookies and loggers
app.use(cors({
  origin: process.env.ORIGIN
}));
app.set('trust proxy', 1);

//GITHUB
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes intro
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/kata', kataRouter);
app.use('/solutions',solutionsRouter)
app.use('/likes', likesRouter)
app.use('/comments', commentsRouter)
app.use('/champions', championsRouter)
app.use('/admin', adminRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err.status === 404) {
    res.status(err.status || 404);
  } else {
    res.status(err.status || 500);
  }
});

module.exports = app;
