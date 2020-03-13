const express = require('express');

const router = express.Router();
// const mongoose = require('mongoose');
const Order = require('../models/Order');

// GET route => to view all ORDERS
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.find().populate('CustomerID');
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

// GET route => to view the ORDER Detail by Id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate('CustomerID');
    res.json({ status: 200, order });
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndRemove(id);
    res.json({ status: 200, order });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
