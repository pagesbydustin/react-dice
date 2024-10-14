export default class Game {
  constructor() {
    this.gameID = this.generateCustomID(16);
    this.gameRound = 0;
    this.isStarted = false;
    this.players = [];
    this.currentPlayerIndex = 0;
    this.gameState = 'starting';
    this.timer = false;
  }
  startGame() {
    if (!this.isStarted) {
      this.isStarted = true;
      this.gameState = 'playing';
      this.currentPlayerIndex = 0;
      this.players[this.currentPlayerIndex].startTurn();
    }
  }

  nextPlayer() {
    this.currentPlayerIndex++;
    if (this.currentPlayerIndex >= this.players.length) {
      this.currentPlayerIndex = 0;
    }
    this.players[this.currentPlayerIndex].startTurn();

  }

  generateCustomID(length = 10) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
    let id = "";

    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
  }
  startGame() {
    if (!this.isStarted) {
      this.isStarted = true;
      this.gameState = 'playing';
    }
  }

  handlePlayerAction(player, action) {
    switch (action) {
      case "roll":
        if (player === this.players[this.currentPlayerIndex]) {
          player.rollDice();
          if (!player.isRolling) {
            this.nextPlayer();
          }
        }
        break;

      // ... other actions ...

      default:
        break;
    }
  }

}