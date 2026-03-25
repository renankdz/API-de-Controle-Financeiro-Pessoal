const express = require('express');
const router = express.Router();

const controller = require('../controllers/transactionController');

router.post('/', controller.createUser);

module.exports = router;