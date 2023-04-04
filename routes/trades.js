const express = require('express');
const router = express.Router();
const Trade = require('../models/trades');
const { createTrade, getTrade, getSpecificTrade, updateSpecificTrade, deleteSpecificTrade } = require('../controllers/trades');

// Create a new trade
router.post('/', createTrade);

// Get all trades
router.get('/', getTrade);

// Get a specific trade by id
router.get('/:id', getSpecificTrade);

// Update a specific trade by id
router.put('/:id', updateSpecificTrade);
router.patch('/:id', updateSpecificTrade);
// Delete a specific trade by id
router.delete('/:id', deleteSpecificTrade);

module.exports = router;
