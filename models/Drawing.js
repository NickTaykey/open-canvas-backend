const mongoose = require('mongoose');

const drawingSchema = new mongoose.Schema({
	pixels : String
});

const drawingModel = mongoose.model('Drawing', drawingSchema);

module.exports = drawingModel;
