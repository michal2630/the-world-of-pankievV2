class World {
  constructor(type, columns, rows) {
    this.type = type;
    this.columns = columns;
    this.rows = rows;
  }

  initializeOrganisms() {

    //Creating animals
    let wolf = new Animal("Wolf", 9, [1, 1], 0, 5);
    let sheep = new Animal("Sheep", 2, [1, 1], 0, 4);
    let fox = new Animal("Fox", 2, [1, 1], 0, 7);
    let turtle = new Animal("Turtle", 2, [1, 1], 0, 1);
    let antelope = new Animal("Antelope", 4, [1, 1], 0, 4);

    let animals = [wolf, sheep, fox, turtle, antelope];

    //Creating a map
    let map = new Array(this.rows);

    for (let i = 0; i < this.columns; i++) {
      map[i] = new Array(this.columns);
    }

    // Adding Animals to the Map
    for (let i = 0; i < animals.length;) {

      let randomRowDraw = Math.floor(Math.random() * Math.floor(this.rows));
      let randomColumnsDraw = Math.floor(Math.random() * Math.floor(this.columns));


      if (map[randomRowDraw][randomColumnsDraw] == null) {
        map[randomRowDraw][randomColumnsDraw] = animals[i];
        animals[i].position = [randomRowDraw, randomColumnsDraw];
        i++;
      }
    
    }
    return map;
  }



  makeATurn() {
    console.log('Heello')
  }

  drawWorld() {



  }

  drawElements() {
  }


}


class Organism {
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
    this.world.makeATurn();
  }
}

class Plant extends Organism {
  constructor(type, strength, position, world) {
    super(type, strength, position, world);
  }
}

class Animal extends Organism {
  constructor(type, strength, position, initiative) {
    super(type, strength, position);
    this.initiative = initiative;
  }

}

let world = new World("jp", 3, 3);


world.initializeOrganisms();



// while(ture){
//   world.drawWorld();
// }







// var world = new World();
// // Tworzenie organizmów
// ...


// // Rozpoczęcie pętli gry
// while(true) {
// 	2. swiat -> narysuj 
// }

// swiat -> organizmy[][]

// dla każdego organizmu o zrób:
// o -> zrób turę

// swiat -> narysuj

// dla każdego organizmu o zrób:
// o -> narysuj