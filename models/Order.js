const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  OrderID: { type: Number },
  OrderNo: { type: String },
  CustomerID: { type: Number },
  PMethod: { type: String },
  GTotal: { type: Number },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
