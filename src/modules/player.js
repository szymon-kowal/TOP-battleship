class Player {
    constructor(name, gameboard, isAI = false) {
        this.name = name;
        this.gameboard = gameboard;
        this.isAI = isAI;
    }

    takeTurn(row, col) {
        if (this.isAI === true) {
            while (true) { 
                const randomInt1 = Math.floor(Math.random() * 10) + 1;
                const randomInt2 = Math.floor(Math.random() * 10) + 1;

                if (!(this.gameboard.wasCellShot(randomInt1, randomInt2))) {
                    this.gameboard.receiveAttack(randomInt1, randomInt2);
                    break;
                };
            }
        } else {
            if (!(this.gameboard.wasCellShot(row, col))) {
                this.gameboard.receiveAttack(row, col);
            };
        };
    };
};

export default Player;