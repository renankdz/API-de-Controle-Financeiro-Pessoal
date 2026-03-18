const express = require('express');
const app = express();

const transactionRoutes = require('./src/routes/transactionRoutes');

app.use(express.json());

// rota principal (pode manter)
app.get('/', (req, res) => {
  res.send('API rodando');
});

// 👇 aqui você conecta suas rotas novas
app.use('/transactions', transactionRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});