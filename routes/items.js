const express = require('express');

const router = express.Router();
// const mongoose = require('mongoose');
const Item = require('../models/Item');

// GET route => to view all ITEMS
router.get('/', async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
