# RoundControllerEvolution

**RoundControllerEvolution** é um servidor Node.js desenvolvido para controlar rodadas de um jogo. Ele fornece recursos para gerenciar a ordem dos jogadores e executar ações como adicionar e remover jogadores do jogo.

## Funcionalidades

### A) Recurso Principal - Quem Joga?

O recurso principal do servidor retorna o nome do próximo jogador que deve jogar. Ele respeita a ordem dos jogadores e reinicia após a última rodada.

### B) Remover Jogador

O servidor possui um endpoint para remover jogadores do jogo. Você pode especificar o índice do jogador que deseja remover. O array de jogadores é atualizado após a remoção.

### C) Adicionar Jogador

Este endpoint permite adicionar um novo jogador ao jogo. Você pode especificar o nome do jogador e opcionalmente o índice em que deseja adicioná-lo. O array de jogadores é atualizado de acordo com a posição desejada.

## Como Usar

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Execute `npm install` para instalar as dependências.
4. Execute `node server.js` para iniciar o servidor.

## Exemplos de Uso

- **Recurso Principal:**
  - Acesse `http://localhost:8000` para ver o próximo jogador.

- **Remover Jogador:**
  - Acesse `http://localhost:8000/remover?indice=[indice]` para remover um jogador.

- **Adicionar Jogador:**
  - Acesse `http://localhost:8000/adicionar?nome=[nome]&indice=[indice]` para adicionar um jogador.

## Observações

- Certifique-se de atualizar o array de jogadores no código conforme necessário.
- A ordem dos jogadores é mantida após adições ou remoções.

---

Sinta-se à vontade para personalizar o README de acordo com suas preferências e adicionar informações adicionais, como sua assinatura ou detalhes específicos do uso.
