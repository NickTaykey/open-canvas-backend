const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const drawingsRouter = require('./routes/drawings');
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/open-canvas', {
	useNewUrlParser    : true,
	useUnifiedTopology : true,
	useCreateIndex     : true,
	useFindAndModify   : false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('successfully connected to the DB!'));

app.use('/drawings', drawingsRouter);
app.use('/', indexRouter);

module.exports = app;
