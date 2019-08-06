import Square from "./square.js";
import constants from "./constants.js";

export default class SnakeBody extends Square {
  constructor(x, y, parent, n) {
    super(x, y, parent);
    this.n = n;
    this.style.backgroundColor = 'transparent';

    let template = document.getElementById('snake-body');
    let templateContent = template.content;
    console.log('template', template)
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.appendChild(templateContent.cloneNode(true));
    this.innerHTML = "<span slot='number'>" + n +"</span>";
    console.log('Created with ', n);
  }

  update() {
    this.setPosition(this.parent.oldX, this.parent.oldY)
    if (this.tail) {
      this.tail.update();
    }
  }

  increaseSize() {
    if (!this.tail) {
      this.tail = new SnakeBody(this.oldX, this.oldY, this, this.n + 1);
      constants.stage.instance.appendChild(this.tail);
    } else {
      this.tail.increaseSize();
    }
  }
}
customElements.define('app-snake-body', SnakeBody);
