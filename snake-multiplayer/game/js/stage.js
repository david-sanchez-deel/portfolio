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
        width: `${constants.stage.size}px`,
        height: `${constants.stage.size}px`,
        'background-color': "#eee",
        position: 'absolute',

      });
    constants.stage.instance = this;
    this.dummies = {};
    this.configure();
  }

  configure() {
    const squareSize = constants.stage.squareSize;
    for (let column = 0; column < constants.stage.columns ; column += 1) {
      this.appendChild(new Wall(column * squareSize, 0, this));
      this.appendChild(new Wall(
        column * squareSize,
        constants.stage.size - squareSize, this));
    }

    for (let row = 1; row < constants.stage.columns - 1; row += 1) {
      this.appendChild(new Wall(0, row * squareSize, this));
      this.appendChild(new Wall(
        constants.stage.size - squareSize, row * squareSize, this));
    }
    /*
     */
  }

  fruit(position, id) {
    if (id) {
      this.dummies[id].increaseSize();
    }
    if (this.fruitObject) {
      this.removeChild(this.fruitObject);
    }
    this.fruitObject = new Fruit(...position, this);
    this.appendChild(this.fruitObject);
  }

  update(data) {
    for (const player of Object.values(data)) {
      if (!player.position) {
        continue;
      }
      this.moveDummy(player.position, player.id);
    }
    for (let dummy of Object.keys(this.dummies)) {
      if (!(dummy in data)) {
        this.removeChild(this.dummies[dummy]);
        delete this.dummies[dummy];
      }
    }
  }

  moveDummy(position, id) {
    if (!(id in this.dummies)) {
      this.dummies[id] = new Snake(...position, this, id === window.snake.server.id);
      this.appendChild(this.dummies[id]);
    } else {
      this.dummies[id].setPosition(...position);
      this.dummies[id].update();
    }
  }
}

customElements.define('app-stage', Stage, { extends: 'div' });
