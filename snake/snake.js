import SnakeBody from "./snake-body.js";
import constants from "./constants.js";
import Fruit from "./fruit.js";
import Wall from "./wall.js";

export default class Snake extends HTMLElement {
  constructor(x, y, parent) {
    super();
    this.setPosition(x, y);
    this.parent = parent;
    this.score = 0;
    const style = document.createElement('link');
    style.setAttribute('href', './snake-body.css');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');

    this.head = new SnakeBody(this.x, this.y, this, 1);
    constants.stage.instance.appendChild(this.head);
    this.configure();
  }

  configure() {
    window.addEventListener('keypress', (ev) => {
      const key = ev.key.toLowerCase();
      if (key === 'a') {
        return this.direction = 'left';
      }
      if (key === 'w') {
        return this.direction = 'up';
      }
      if (key === 'd') {
        return this.direction = 'right';
      }
      if (key === 's') {
        return this.direction = 'down';
      }
    });
  }

  setPosition(x, y) {
    this.oldX = this.x;
    this.oldY = this.y;
    this.x = x;
    this.y = y;
    Object.assign(
      this.style,
      {
        left: `${this.x}px`,
        top: `${this.y}px`,
      }
    );
  }

  update() {
    // Movement
    if (this.direction === 'left') {
      this.setPosition(this.x - constants.stage.squareHeight, this.y);
    } else if (this.direction === 'right') {
      this.setPosition(this.x + constants.stage.squareHeight, this.y);
    } else if (this.direction === 'up') {
      this.setPosition(this.x, this.y - constants.stage.squareWidth);
    } else if (this.direction === 'down') {
      this.setPosition(this.x, this.y + constants.stage.squareWidth);
    }
    this.head.update();
    // Eat fruit
    const element = document.elementFromPoint(this.x, this.y);
    if (element instanceof Fruit) {
      this.increaseSize(element);
    }
    // Wall
    if (element instanceof Wall) {
      this.die();
    }
  }

  die() {
    alert('YOU DIED!, SCORE: ' + this.score);
    location.reload();
  }

  increaseSize(fruit) {
    this.parent.removeChild(fruit);
    this.score += 1;
    this.head.increaseSize();
  }
}
customElements.define('app-snake', Snake);
