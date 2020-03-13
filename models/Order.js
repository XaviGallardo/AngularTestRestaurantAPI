const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const OrderSchema = new Schema({
  OrderID: { type: String },
  OrderNo: { type: String },
  CustomerID: { type: ObjectId, ref: 'Customer' },
  PMethod: { type: String },
  GTotal: { type: Number },
  OrderItems: [
    {
      // Item: { type: ObjectId, ref: 'Item' },
      ItemName: { type: String },
      OrderItemID: { type: Number },
      OrderID: { type: String },
      ItemID: { type: String },
      Price: { type: Number },
      Quantity: { type: Number },
      Total: { type: Number },
    },
  ],
  DeletedOrderItemsIDs: { type: String },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
