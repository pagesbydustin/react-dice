class Player {
    constructor(gamerTag) {
        this.gamerTag = gamerTag;
        this.gamerID = this.generatePlayerId(16);
        this.isTurn = false;
        this.isWinning = false;
        this.score = 0;
        this.currentRoll = 0;
        this.isRolling = false;
        this.rollsLeft = 3;
    }
    

    // Method to generate a unique player ID
    generatePlayerId(length = 10) {
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_!$*";
        let id = "";

        for (let i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random()
                * characters.length));
        }

        return id;
    }
    // Method to roll the dice
    rollDice() {
        if (this.isRolling && this.rollsLeft > 0) {
            // Roll the dice and update currentRoll
            this.currentRoll = Math.floor(Math.random() * 6) + 1;
            this.rollsLeft--;

            // Check if the player has used all their rolls
            if (this.rollsLeft === 0) {
                this.endTurn();
            }
        }
    }
    // Method to update the player's score
    updateScore(newScore) {
        this.score += newScore;
    }

    // Method to start the player's turn
    startTurn() {
        this.isTurn = true;
        this.isRolling = true;
        this.rollsLeft = 3;
    }

    // Method to end the player's turn
    endTurn() {
        this.isTurn = false;
        this.isRolling = false;
    }
}

