const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  ItemID: { type: Number },
  Name: { type: String },
  Price: { type: Number },
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
