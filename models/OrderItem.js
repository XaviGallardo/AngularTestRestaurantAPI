const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderItemSchema = new Schema({
  OrderItemID: { type: Number },
  OrderID: { type: Number },
  ItemID: { type: Number },
  Quantity: { type: Number },
  ItemName: { type: String },
  Price: { type: Number },
  Total: { type: Number },
});

const OrderItem = mongoose.model('OrderItem', OrderItemSchema);

module.exports = OrderItem;
