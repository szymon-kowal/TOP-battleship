// length is 1 indexed num 

class Ship {
    constructor(length, position, isVertical) {
        this.length = length;
        this.position = position;
        this.isVertical = isVertical;
        this.HP = new Array(length).fill(false);
    }

    getHP() {
        return this.HP;
    }

    getLength() {
        return this.length;
    }

    getIsVertical() {
        return this.isVertical;
    }

    hit(num) {
        if (num < 0 || num > this.HP.length - 1) throw new Error('Wrong number homie');
        this.HP[num] = true;
    }

    isSunk() {
        return this.HP.every(val => val === true);
    }

};

const ship = new Ship(3, [0, 0], false);
ship.hit(0);
ship.hit(1);
ship.hit(2);

console.log(ship.getHP());

export default Ship;