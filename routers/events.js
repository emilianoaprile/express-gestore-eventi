const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController.js');

router.get('/', eventController.index);
router.post('/', eventController.store);
router.put('/:id', eventController.update);
router.get('/:id', eventController.getById);

module.exports = router;