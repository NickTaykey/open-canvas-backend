const express = require('express');
const { raise404 } = require('../helpers');
const router = express.Router();

router.get('*', raise404);
router.post('*', raise404);
router.put('*', raise404);
router.delete('*', raise404);

module.exports = router;
