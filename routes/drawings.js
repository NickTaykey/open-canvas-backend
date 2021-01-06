const express = require('express');
const router = express.Router();
const { postDrawings, getDrawings } = require('../controllers/drawings');
const { asyncErrorHandler } = require('../helpers');

// Index - get all the drawings
router.get('/', asyncErrorHandler(getDrawings));

// Create - save new drawing
router.post('/', asyncErrorHandler(postDrawings));

module.exports = router;
