const express = require('express');

const router = express.Router();
// const mongoose = require('mongoose');
const Order = require('../models/Order');
const Customer = require('../models/Customer');

// POST route => to create new ORDER
router.post('/', async (req, res, next) => {
  const {
    OrderID,
    OrderNo,
    CustomerID,
    PMethod,
    GTotal,
    OrderItems,
  } = req.body;

  console.log(' POST :OrderID -> ', OrderID);
  console.log(' POST :OrderItems -> ', OrderItems);
  // console.log('Body', req.body);

  try {
    const customer = await Customer.findOne({ CustomerID });
    // console.log('TCL: customer', customer);
    // console.log('TCL: OrderID', OrderID);
    // console.log('TCL: OrderItems', OrderItems);

    if (OrderID === null) {
      const order = await Order.create({
        OrderID,
        OrderNo,
        CustomerID: customer._id,
        PMethod,
        GTotal,
        OrderItems,
      });
      // console.log('TCL: order', order);
      // console.log('TCL: OrderItems', OrderItems);

      res.json({
        status: 200,
        order,
      });
    }
  } catch (error) {
    next(error);
  }
});

// PUT route => to EDIT ORDER
router.put('/', async (req, res, next) => {
  const {
    OrderID,
    OrderNo,
    CustomerID,
    PMethod,
    GTotal,
    OrderItems,
  } = req.body;
  console.log(' PUT :OrderItems -> ', OrderItems);

  // console.log('Body', req.body);

  try {
    const customer = await Customer.findOne({ CustomerID });

    delete OrderItems[0]._id;
    // console.log('TCL: OrderItems After Delete', OrderItems);
    const order = await Order.findByIdAndUpdate(
      OrderID,
      {
        $set: { CustomerID: customer._id, PMethod, GTotal, OrderItems },
      },
      {
        new: true,
      },
    );

    // console.log('TCL: order', order);

    res.json({
      status: 200,
      order,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
