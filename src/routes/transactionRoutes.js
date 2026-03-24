const express = require('express');
const router = express.Router();

const controller = require('../controllers/transactionController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/balance', controller.getBalance);
router.get('/create-user', controller.createUser);

module.exports = router;