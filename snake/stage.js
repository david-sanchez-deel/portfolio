import constants from "./constants.js";
import Wall from "./wall.js";
import Fruit from "./fruit.js";
import Snake from "./snake.js";

export default class Stage extends HTMLDivElement {
  constructor() {
    super();
    Object.assign(
      this.style,
      {
        width: `${constants.stage.width}px`,
        height: `${constants.stage.height}px`,
        'background-color': "#eee",
      });
    constants.stage.instance = this;
    this.configure();
  }

  configure() {
    const wallWidth = constants.stage.squareWidth;
    const wallHeight = constants.stage.squareHeight;
    for (let column = 0; column < constants.stage.columns ; column += 1) {
      this.appendChild(new Wall(column * wallWidth, 0, this));
      this.appendChild(new Wall(
        column * wallWidth,
        constants.stage.height - wallHeight, this));
    }

    for (let row = 1; row < constants.stage.rows - 1; row += 1) {
      this.appendChild(new Wall(0, row * wallHeight, this));
      this.appendChild(new Wall(
        constants.stage.width - wallWidth, row * wallHeight, this));
    }
    setInterval(() => this.update(), 100);
    this.appendChild(new Fruit(this));
    this.snake = new Snake(wallWidth, wallHeight, this);
    this.appendChild(this.snake);
  }

  update() {
    this.snake.update();
  }
}

customElements.define('app-stage', Stage, { extends: 'div' });
