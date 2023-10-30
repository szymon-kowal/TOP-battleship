class Player {
    constructor(name, gameboard, isAI = false) {
        this.name = name;
        this.gameboard = gameboard;
        this.isAI = isAI;
        this.ships = [5, 4, 3, 3, 2];
    }

    takeTurn(row, col) {
        if (this.isAI === true) {
            while (true) { 
                const randomInt1 = Math.floor(Math.random() * 10);
                const randomInt2 = Math.floor(Math.random() * 10);

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

    createRandomShips(ShipClass) {
        while (this.ships.length > 0) {
            let isValidPlacement = false;
            let randomInt1; let randomInt2; let randomInt3 = 0;
            let ship;
            while (!isValidPlacement) {
                randomInt1 = Math.floor(Math.random() * 10);
                randomInt2 = Math.floor(Math.random() * 10);
                randomInt3 = Math.floor(Math.random() * 2);
    
                ship = new ShipClass(this.ships[0], [randomInt1, randomInt2], randomInt3 === 0);
                isValidPlacement = this.gameboard.checkPlacing(this.ships[0], [randomInt1, randomInt2], randomInt3 === 0);
            }
            this.gameboard.placeShip(ship);
            this.ships.shift();
        }
    }
    
};

export default Player;