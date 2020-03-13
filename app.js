require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var itemsRouter = require('./routes/items');
var customersRouter = require('./routes/customers');
var ordersRouter = require('./routes/orders');
var orderRouter = require('./routes/order');

const cors = require('cors')({ origin: true, credentials: true });

// mongodb connect MONGO ATLAS
(async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    // console.log(
    //   `Connected to Mongo! Database name: "${connection.connections[0].db.s.databaseName}"`,
    // );
    console.log(
      `Connected to Mongo! Database name: "${connection.connections[0].name}"`,
    );
  } catch (err) {
    console.log('Error connecting to Mongo database.', err);
  }
})();

var app = express();

app.use(cors);
app.options('*', cors);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/items', itemsRouter);
app.use('/customers', customersRouter);
app.use('/orders', ordersRouter);
app.use('/order', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
