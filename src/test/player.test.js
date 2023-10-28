import Player from '../modules/player';
import Gameboard from '../modules/gameboard';
import Ship from '../modules/ship';

test('Is player created ?', () => {
    const pla1 = new Player('Bob');
    expect(pla1.name).toBe('Bob');
});

test('Computer shoots at random place', () => {
    
    const gameB = new Gameboard();
    const ship = new Ship(2, [0,0], false);
    gameB.placeShip(ship);

    expect(gameB.board).toBeDefined();

    const pla1 = new Player('Bob', gameB, true);
    pla1.takeTurn();
    function wasCellShotTest(gameboard) {
        for (let i = 0; i < gameboard.length; i += 1) {
            for (let j = 0; j < gameboard[i].length; j += 1) {
                if (gameboard[i][j].wasShot) {
                    return true;
                }
            };
        };
        return false;
    };
    expect(wasCellShotTest(gameB.board)).toBe(true);
});