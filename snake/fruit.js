import Square from "./square.js";
import constants from "./constants.js";

export default class Fruit extends Square {
  constructor(parent) {
    super(0, 0, parent);
  }

  connectedCallback() {
    this.style.backgroundColor = 'red';
    this.setPosition(...this.getRandomPosition());
  }

  getRandomPosition() {
    /** f(x) = (rnd()(max - min)) + min --> [min, max] E R */
    const randomNumber = (min, max) => (Math.random() * (max - min)) + min
    /** g(x) = round(f(x)/dif)*dif */
    const randomPosition = (min, max) => Math.round(randomNumber(min, max)/min)*min;
    console.log();
    return [
      randomPosition(constants.stage.squareWidth, constants.stage.width - (constants.stage.squareWidth * 2)),
      randomPosition(constants.stage.squareHeight, constants.stage.height - (constants.stage.squareHeight * 2)),
    ]
  }

  disconnectedCallback() {
    this.parent.appendChild(new Fruit(this.parent));
  }

  adoptedCallback() {}
  attributeChangedCallback() {}
}
customElements.define('app-fruit', Fruit);
