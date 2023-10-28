const express = require('express');
const app = express();
const port = 3000;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo a sua API em Node.js!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
