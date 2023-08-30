const express = require('express');
const jogadores = require('./bancoDeDados/dataBase')
const controladores = require('./controladores')

const rotas = express();

rotas.get('/', controladores.jogadorRodada)

rotas.delete('/remover', controladores.removerJogador)

rotas.post('/adicionar', controladores.adicionarJogador)

module.exports= rotas


