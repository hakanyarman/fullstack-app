require('dotenv').config();

var express = require('express');
const { Pool } = require('pg');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'myappdb',
    password: 'Hakan.971',
    port: 5432,
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
