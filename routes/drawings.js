const express = require('express');
const router = express.Router();
const Drawing = require('../models/Drawing');

// Index - get all the drawings
router.get('/', async function (req, res, nxt) {
	let drawings = await Drawing.find();
	return res.status(200).json(drawings);
});

// Create - save new drawing
router.post('/', async function (req, res, nxt) {
	const { pixels } = req.body;
	let drawing = await Drawing.create({ pixels });
	return res.status(201).json(drawing);
});

module.exports = router;
