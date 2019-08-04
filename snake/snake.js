import SnakeBody from "./snake-body.js";
import constants from "./constants.js";

export default class Snake extends HTMLElement {
  constructor(x, y, parent) {
    super();
    this.setPosition(x, y);
    this.parent = parent;
    this.shadow = this.attachShadow({mode: 'open'});
    const style = document.createElement('link');
    style.setAttribute('href', './snake-body.css');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    this.shadow.appendChild(style);

    const head = new SnakeBody(0, 0, this.parent, 1);
    this.shadow.appendChild(head);
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
    if (this.direction === 'left') {
      this.setPosition(this.x - constants.stage.squareHeight, this.y);
    } else if (this.direction === 'right') {
      this.setPosition(this.x + constants.stage.squareHeight, this.y);
    } else if (this.direction === 'up') {
      this.setPosition(this.x, this.y - constants.stage.squareWidth);
    } else if (this.direction === 'down') {
      this.setPosition(this.x, this.y + constants.stage.squareWidth);
    }
  }
}
customElements.define('app-snake', Snake);
