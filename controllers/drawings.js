const Drawing = require('../models/Drawing');

async function getDrawings (req, res, nxt) {
	let drawings = await Drawing.find();
	return res.status(200).json(drawings);
}

async function postDrawings (req, res, nxt) {
	const { pixels } = req.body;
	let drawing = await Drawing.create({ pixels });
	return res.status(201).json(drawing);
}

module.exports = { getDrawings, postDrawings };
