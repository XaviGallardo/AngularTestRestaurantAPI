const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  CustomerID: { type: Number },
  Name: { type: String },
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
