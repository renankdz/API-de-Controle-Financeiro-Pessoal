const express = require('express');
const router = express.Router();

const controller = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');

//  TODAS as rotas protegidas
router.post('/', authMiddleware, controller.create);
router.get('/', authMiddleware, controller.getAll);
router.get('/balance', authMiddleware, controller.getBalance);

module.exports = router;