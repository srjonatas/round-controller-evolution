const express = require('express');
const rotas = require('./rotas');

const porta = 8000;

const app = express();

app.use(express.json())
app.use(rotas)






app.listen(porta, () => `Servidor rodando na porta ${porta}`)