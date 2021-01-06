const express = require('express');
const router = express.Router();

function raise404 (req, res, nxt) {
	return res.status(404).json({
		status  : 404,
		message : 'Not Found'
	});
}

router.get('*', raise404);
router.post('*', raise404);
router.put('*', raise404);
router.delete('*', raise404);

module.exports = router;
