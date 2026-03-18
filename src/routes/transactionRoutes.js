const express = require('express');
const router = express.Router();
const controller = require('../controllers/transactionController');

router.post('/', controller.create);
router.get('/', controller.list);
router.get('/balance', controller.getBalance);

module.exports = router;
