import constants from "./constants.js";

export default class Square extends HTMLElement {
  constructor(x, y, parent) {
    super();
    this.setPosition(x, y);
    this.width = constants.stage.squareWidth;
    this.height = constants.stage.squareHeight;
    this.parent = parent;
    Object.assign(
      this.style,
      {
        position: 'absolute',
        width: `${this.width}px`,
        height: `${this.height}px`,
      }
    );
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
}

customElements.define('app-square', Square);
