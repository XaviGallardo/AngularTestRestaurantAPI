const express = require('express');

const router = express.Router();
// const mongoose = require('mongoose');
const Order = require('../models/Order');

// POST route => to create new ORDER
router.post('/', async (req, res, next) => {
  const { OrderID, OrderNo, CustomerID, PMethod, GTotal } = req.body;

  try {
    const order = await Order.create({
      OrderID,
      OrderNo,
      CustomerID,
      PMethod,
      GTotal,
    });

    res.json({
      status: 200,
      order,
    });
  } catch (error) {
    next(error);
  }

  // try {
  //   const items = await Item.find();
  //   res.json(items);
  // } catch (error) {
  //   next(error);
  // }
});

module.exports = router;
