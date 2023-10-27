/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import Ship from '../modules/ship';

// Need to have ship created like new Ship(length, origin, isVertical)
// methods : hit() - increase the hits to the ship;
//           isSunk() - check if ship is sunk
// Soo ship needs to have some sort of hp bar
// It will be for now Array(ship.length).fill(false);
// If it will be false, it means that it was not hit.
// So i need method to display if ship was hit and where it was hit !


test('Is ship being created ?',() => {
    const ship = new Ship(3, [0, 0], false);
    expect(ship.getHP()).toEqual([true, true, true]);
});

test('Is ship being hit ?', () => {
    const ship = new Ship(3, [0, 0], false);
    ship.hit(2);
    expect(ship.getHP()).toEqual([true, true, false]);
});

test('Is hit behaving correctly when it is used out of bounds ?', () => {
    expect(() => new Ship(3, [0, 0], true).hit(4)).toThrow();
});

test('Is ship correctly returning is it sunk ?', () => {
    const ship = new Ship(3, [0, 0], false);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.getHP()).toEqual([false, false, false]);
    expect(ship.isSunk()).toBe(true);
});


