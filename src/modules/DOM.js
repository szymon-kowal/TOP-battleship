import Ship from './ship';
import Game from './game';

const playGame = () => {
    const [playerBoard, computerBoard] = document.querySelectorAll('.mainCont');
    const names = ['playerBoard', 'computerBoard'];

    const game = new Game();

    game.createBoard(playerBoard, names[0]);
    game.createBoard(computerBoard, names[1]);

    game.player1.createRandomShips(Ship);
    game.player2.createRandomShips(Ship);

    game.displayBoard(playerBoard, game.gameboardLeft);
    game.displayBoard(computerBoard, game.gameboardRight, 1);

    game.addEventListeners(playerBoard, computerBoard, computerBoard);
};

export default playGame;