const express = require('express');

const router = express.Router();
// const mongoose = require('mongoose');
const Customer = require('../models/Customer');

// GET route => to view all ITEMS
router.get('/', async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
