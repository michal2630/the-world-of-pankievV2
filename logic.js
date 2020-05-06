import World from './modules/World.js';

///////////////////Animal Creator///////////////////////

let world = new World("jp", 5, 5);


world.initializeOrganisms();

world.drawWorld();

world.drawElements();

world.makeATurn();


