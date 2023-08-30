const jogadores = require('./bancoDeDados/dataBase')
let i = 0

const jogadorRodada = (req, res) => {

    res.status(200).json({mensagem: `É a vez de ${jogadores[i]} jogar!`})
    
    i = (i + 1) % jogadores.length; // Substitui um IF e faz exatamente a mesma coisa

}

const removerJogador = (req, res) =>{
    const  {indice}  = req.query

    if(!jogadores[indice]){
        return res.status(404).json({mensagem: "Não existe jogador no índice informado para ser removido."})
    }
    
    jogadores.splice(indice, 1)

    return res.status(200).json(jogadores)
}

const adicionarJogador = (req, res) => {
    const  {nome, indice }  = req.query

    if(indice){
        if(indice > jogadores.length){
        return res.status(400).json({mensagem: `O índice informado '${indice}' não existe no array. Novo jogador não foi adicionado.`})
       
    } else{
        jogadores.splice(indice, 0, nome);
      }
    }

    res.send(jogadores)
}   

module.exports = {
    jogadorRodada,
    removerJogador,
    adicionarJogador
}