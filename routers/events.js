const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController.js');

router.get('/', eventController.index);
router.post('/', eventController.store);
router.put('/:id', eventController.update);

module.exports = router;