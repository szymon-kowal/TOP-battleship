
class Gameboard {
    constructor() {
        this.board = Gameboard.initializeBoard();
        this.fleet = [];
    };

    placeShip(ship) {
        const length = ship.getLength();
        const position = ship.getPosition();
        const isVertical = ship.getIsVertical();
        if (!(this.checkPlacing(length, position, isVertical))) throw new Error('Ship can not be placed !');
        else {
            const currFleetIndex = this.fleet.push(ship) - 1;
            const row = position[0];
            const col = position[1];
            for (let i = 0; i < length; i += 1) {
                if (isVertical) {
                    this.board[row + i][col].fleetIndex = currFleetIndex;
                    this.board[row + i][col].hitIndex = i;
                } else if (!isVertical) {
                    this.board[row][col + i].fleetIndex = currFleetIndex;
                    this.board[row][col + i].hitIndex = i;
                }
            }
        }
    };

    receiveAttack(row, col) {
        if (row < 0 || col < 0 ||
            row >= this.board.length || col >= this.board[0].length || 
            this.board[row][col].wasShot) {
            throw new Error('Wrong coordinates inputed or there was already hit!');
        } else {
            const {fleetIndex, hitIndex} = this.board[row][col];
            this.board[row][col].wasShot = true;
            if (fleetIndex !== null) {
                this.fleet[fleetIndex].hit(hitIndex);
            }
        }
    };

    isGameEnded() {
        return this.fleet
            .every(ship => ship.getHP()
                .every(ele => ele === false));
    };

    checkPlacing(length, position, isVertical) {
        let isLegit = true;
        if (isVertical && !((position[0] + length - 1) < 10) ||
                    (!(isVertical) && !((position[1] + length - 1) < 10))) {
            return false;
        };
        for (let i = 0; i < length; i += 1) {
            if (isVertical && 
                        this.board[position[0] + i][position[1]].fleetIndex !== null) {
                isLegit = false;
            } else if (!isVertical && 
                        this.board[position[0]][position[1] + i].fleetIndex !== null) {
                isLegit = false;
            };
        };
        return isLegit;
    };

    wasCellShot(row, col) {
        return this.board[row][col].wasShot;
    }

    static initializeBoard() {
        const arrayBoard = [];
        for (let i = 0; i < 10; i += 1) {
            const row = [];
            for (let j = 0; j < 10; j += 1) {
                row.push({
                    fleetIndex: null,
                    hitIndex: null,
                    wasShot: false
                });
            }
            arrayBoard.push(row);
        }
        return arrayBoard;
    };
};

export default Gameboard;