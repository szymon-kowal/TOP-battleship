// length is 1 indexed num 

class Ship {
    /*
    * @param {int, int[x, y], boolean}
    */
    constructor(length, position, isVertical) {
        this.length = length;
        this.position = position;
        this.isVertical = isVertical;
        this.HP = new Array(length).fill(true);
    }

    getHP() {
        return this.HP;
    }

    getPosition() {
        return this.position;
    }

    getLength() {
        return this.length;
    }

    getIsVertical() {
        return this.isVertical;
    }

    hit(num) {
        if (num < 0 || num > this.HP.length - 1) throw new Error('Wrong number homie');
        this.HP[num] = false;
    }

    isSunk() {
        return this.HP.every(val => val === false);
    }

};

export default Ship;