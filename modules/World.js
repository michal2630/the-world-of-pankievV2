import Directions from './Directions.js';
import Plant from './Organisms.js';
import Animal from './Organisms.js';

class World {
  constructor(type, columns, rows) {
    this.type = type;
    this.columns = columns;
    this.rows = rows;
  }

  initializeOrganisms() {

    //Creating Animals
    let wolf = new Animal("Wolf", 9, [0, 0], 0, 5);
    let sheep = new Animal("Sheep", 2, [0, 0], 0, 4);
    let fox = new Animal("Fox", 2, [0, 0], 0, 7);
    let turtle = new Animal("Turtle", 2, [0, 0], 0, 1);
    let antelope = new Animal("Antelope", 4, [0, 0], 0, 4);

    // Creating plants
    let grass = new Plant("Grass", 0);
    let sowThistle = new Plant("Sow Thistle", 0);
    let guarana = new Plant("Guarana", 0);
    let wolfberry = new Plant("Wolfberry", 99);
    let hogweed = new Plant("Hogweed", 10);

    let organisms = [
      wolf, sheep, fox, turtle, antelope,
      grass, sowThistle, guarana, wolfberry, hogweed
    ];

    //Creating a map
    let map = new Array(this.rows);

    for (let i = 0; i < this.columns; i++) {
      map[i] = new Array(this.columns);
    }

    // Adding organisms to the Map
    for (let i = 0; i < organisms.length;) {

      let randomRowDraw = Math.floor(Math.random() * Math.floor(this.rows));
      let randomColumnsDraw = Math.floor(Math.random() * Math.floor(this.columns));


      if (map[randomRowDraw][randomColumnsDraw] == null) {
        map[randomRowDraw][randomColumnsDraw] = organisms[i];
        organisms[i].position = [randomRowDraw, randomColumnsDraw];
        i++;
      }

    }

    this.map = map;
  }

  getRandomlyChangedPosition(originalPosition) {
    const direction = this.getRandomDirection();
    const changedPosition = this.getChangedPosition(originalPosition, direction);
    return changedPosition;
  }

  getRandomDirection() {
    return Math.floor(Math.random() * (5 - 1) + 1);
  }

  getChangedPosition(originalPosition, direction) {
    let newPosition = originalPosition.slice()
    if (direction === Directions.UP) {
      newPosition[1] -= 1;
    } else if (direction === Directions.DOWN) {
      newPosition[1] += 1;
    } else if (direction === Directions.RIGHT) {
      newPosition[0] += 1;
    } else if (direction === Directions.LEFT) {
      newPosition[0] -= 1;
    }
    return newPosition;
  }

  isValidPosition(position) {
    let x = position[0];
    let y = position[1];
    let result = x >= 0 && x < this.map.length &&
      y >= 0 && y < this.map[0].length;
    return result;
  }

  getNewValidRandomPosition(originalPosition) {
    let newPosition = this.getRandomlyChangedPosition(originalPosition);
    while (!this.isValidPosition(newPosition)) {
      newPosition = this.getRandomlyChangedPosition(originalPosition);
    }
    return newPosition;
  }

  makeATurn = () => {

    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j] !== undefined) {
          let organism = this.map[i][j];

          console.log(organism.position);

          let newPosition = this.getNewValidRandomPosition(organism.position);
          console.log(newPosition);
          organism.position = newPosition;
        }
      }
    }
  }


  drawElements() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j] !== undefined) {
          let organism = this.map[i][j];

          const numPositionTopX = 9;
          const numPositionTopY = 20;
          const squareSize = 40;

          let canvas = document.getElementById("canvasMap");
          let ctx = canvas.getContext("2d");
          ctx.font = "20px Arial";
          let xOffset = numPositionTopX + j * squareSize;
          let yOffset = numPositionTopY + i * squareSize;

          ctx.fillText(organism.type[0], xOffset, yOffset);
        }
      }
    }
  }

  drawWorld() {
    const squareSize = 40;
    const boardTopx = 0;
    const boardTopy = 0;

    let canvas = document.getElementById("canvasMap");
    let ctx = canvas.getContext("2d");

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {

        ctx.fillStyle = ((i + j) % 2 == 0) ? "black" : "black";
        let xOffset = boardTopx + j * squareSize;
        let yOffset = boardTopy + i * squareSize;

        ctx.rect(xOffset, yOffset, squareSize, squareSize);
        ctx.stroke();
      }
    }
  }



}



export default World;