require('dotenv').config();

const express = require('express');
const app = express();

const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// PRIMEIRO: middleware
app.use(express.json());

// rota principal
app.get('/', (req, res) => {
  res.send('API rodando');
});

// rotas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});