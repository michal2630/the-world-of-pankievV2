export default class Organism {
    constructor(type, strength, position, world) {
        this.type = type;
        this.strength = strength;
        this.position = position;
        this.world = world;
    }

    action() {
    }

    colision() {

    }

    draw() {

    }

    tryingMethod() {
        world.makeATurn();
    }
}


///////////////////Plant Creator///////////////////////

class Plant extends Organism {
    constructor(type, strength, position, world) {
        super(type, strength, position, world);
    }
}

///////////////////Animal Creator///////////////////////

class Animal extends Organism {
    constructor(type, strength, position, initiative) {
        super(type, strength, position);
        this.initiative = initiative;
    }
}

export { Plant, Animal };