const express = require('express');
const app = express();
const transactionRoutes = require('./routes/transactionRoutes');

app.use(express.json());

// rota principal
app.get('/', (req, res) => {
  res.send('API rodando');
});

// usa as rotas corretamente
app.use('/transactions', transactionRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});