const prisma = require('../config/prisma');

exports.getBalance = async () => {
  try {
    const transactions = await prisma.transaction.findMany();

    const balance = transactions.reduce((acc, t) => {
      if (t.type === 'income') return acc + t.amount;
      return acc - t.amount;
    }, 0);

    return balance;
  } catch (error) {
    console.error(error);
    throw error;
  }
};