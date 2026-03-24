const transactionService = require('../services/transactionService');
const prisma = require('../config/prisma');

const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash("123456", 10);

    const user = await prisma.user.create({
      data: {
        email: "teste@email.com",
        password: hashedPassword
      }
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};
exports.create = async (req, res) => {
  try {
    const { title, amount, type, category, userId } = req.body;

    // validação básica
    if (!title || !amount || !type || !category || !userId) {
      return res.status(400).json({ error: 'Dados obrigatórios faltando' });
    }

    const transaction = await prisma.transaction.create({
      data: {
        title,
        amount,
        type,
        category,
        userId
      }
    });

    return res.status(201).json(transaction);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar transações' });
  }
};
exports.getAll = async (req, res) => {
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