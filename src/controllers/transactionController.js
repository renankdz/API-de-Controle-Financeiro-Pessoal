const transactionService = require('../services/transactionService');
const prisma = require('../config/prisma');

exports.create = async (req, res) => {
  try {
    const { title, amount, type, category, userId } = req.body;

    const transaction = await prisma.transaction.create({
      data: { title, amount, type, category, userId }
    });

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar transação' });
  }
};

exports.list = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar transações' });
  }
};
exports.getBalance = async (req, res) => {
  try {
    const balance = await transactionService.getBalance();
    res.json({ balance });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao calcular saldo' });
  }
};