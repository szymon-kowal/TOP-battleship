import Player from './player';
import Gameboard from './gameboard'; 

class Game {
    constructor() {
        this.gameboardLeft = new Gameboard();
        this.gameboardRight = new Gameboard();
        this.player1 = new Player('Szymek', this.gameboardRight);
        this.player2 = new Player('Computer', this.gameboardLeft, true);
        this.currentPlayer = this.player1;
    }

    // Somehow i need to display both of those gameboards 
    
    createBoard(container , name) {
        const cellContainer = document.createElement('div');
        cellContainer.classList.add('board');
        cellContainer.classList.add(`${name}`);
        for (let i = 0; i < this.gameboardLeft.board.length; i += 1) {
            for (let j = 0; j < this.gameboardLeft.board.length; j += 1) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = i;
                cell.dataset.col = j; // One line lower - how i can target this cell:
                // const cell = document.querySelector(`.cell[data-row="${rowIndex}"][data-col="${colIndex}"]`);
                cellContainer.appendChild(cell);
            }
        }
        container.appendChild(cellContainer);
    };

    displayBoard(cellContainer, gameboard, player = this.player2) {
        const cells = cellContainer.querySelectorAll('.cell');
        let index = -1;
        for (let i = 0; i < this.gameboardLeft.board.length; i += 1) {
            for (let j = 0; j < this.gameboardLeft.board.length; j += 1) {
                index += 1;
                if (gameboard.board[i][j].fleetIndex !== null && player === this.player2) {
                    cells[index].classList.add('ship');
                }
                if (gameboard.board[i][j].wasShot === true) {
                    cells[index].classList.add('hit');
                    cells[index].textContent = 'x';
                }
                if (gameboard.board[i][j].wasShot === true && 
                    gameboard.board[i][j].fleetIndex !== null) {
                    cells[index].classList.add('shipHit');  
                    cells[index].textContent = 'o';
                };
            }
        }
    };

    addEventListeners(playerB, computerB, targetedBoard) {
        const handleCellClick = (event) => {
            const clickedCell = event.target;
            const rowIndex = parseInt(clickedCell.dataset.row, 10);
            const colIndex = parseInt(clickedCell.dataset.col, 10);
    
            if (!clickedCell.classList.contains('hit')) {
                this.player1.takeTurn(rowIndex, colIndex);
                this.player2.takeTurn();
                this.displayBoard(playerB, this.gameboardLeft);
                this.displayBoard(computerB, this.gameboardRight, 1);
            }

            
            if ( this.gameboardLeft.isGameEnded() ) {
                const newDiv = document.createElement('div');
                const parentEle = playerB.parentNode;
                newDiv.classList.add('center');
                newDiv.textContent = 'You lost!';

                parentEle.replaceWith(newDiv);
            } else if ( this.gameboardRight.isGameEnded() ) {
                const newDiv = document.createElement('div');
                newDiv.textContent = 'You won!';
                const parentEle = playerB.parentNode;
                newDiv.classList.add('center');

                parentEle.replaceWith(newDiv);
            }

        };
        const cells = targetedBoard.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        });
    };
};

export default Game;