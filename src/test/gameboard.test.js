// I need to somehow :  - place ships
//                      - receive attack
//                      - check if ship was attacked or if it was miss
//                      - if specific ship was attacked then use hit on it;
//                      - after each action somehow save it 
//                      - check if all ships have been sunk
// Constraints:
// Gameboard needs to be 10 x 10
// How i can save data?
// I guess i should make an array wich is 10 x 10 or 100 x 1
// And pass to them object or class which could check if there was hit on this 
// place and if there is any ship?
// 
// A couple of problems here:
// I need to add specific number of ships to each of gameboards
// Somehow implement how to place them
// I have made the Gameboard, now i need to decide how the ships are placed
// Type of ships : 5, 4, 3, 3, 2 (length)
// Soooo, created ships have in them basic coordinates, so i need to
// pass them into the placeShip method and place them in gameBoard somehow

import Gameboard from '../modules/gameboard';
import toBeNxNArray from './toBe10x10';
import Ship from '../modules/ship';

expect.extend({
    toBeNxNArray,
});
  
test('Is gameboard 10 x 10 array with objects inside of them ?', () => {
    const gameboard = new Gameboard;
    expect(gameboard.board).toBeNxNArray(10);
    expect(gameboard.board[0][0]).toEqual(
        {
            fleetIndex: null,
            hitIndex: null,
            wasShot: false
        });
});

test('Is ship being correctly placed?', () => {
    const ship5 = new Ship(5, [0, 0], false);
    const ship5Wrong = new Ship(5, [0, 8],false);
    const ship5Doubled = new Ship(5, [0, 3], false);
    const gameboard = new Gameboard;

    gameboard.placeShip(ship5);

    expect(gameboard.board[0][0].fleetIndex).toBe(0);
    expect(() => gameboard.placeShip(ship5Wrong)).toThrow();
    expect(() => gameboard.placeShip(ship5Doubled)).toThrow();
});

test('Is ship being hit ?', () => {
    const ship5 = new Ship(2, [0, 0], false);
    const gameboard = new Gameboard;

    gameboard.placeShip(ship5);
    gameboard.receiveAttack(0, 0);

    expect(gameboard.board[0][0].wasShot).toBe(true);
    expect(gameboard.board[0][0].fleetIndex).toBe(0);
    expect(() => gameboard.receiveAttack(-1, 3)).toThrow();

    const receivedHPString = JSON.stringify(gameboard.fleet[0].getHP());
    const expectedHPString = JSON.stringify([false, true]);
    expect(receivedHPString).toEqual(expectedHPString);
});

test('Is game ended ?', () => {
    const ship5 = new Ship(2, [0, 0], false);
    const gameboard = new Gameboard;
    gameboard.placeShip(ship5);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.isGameEnded()).toBe(true);
});

