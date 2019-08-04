import Square from "./square.js";

export default class SnakeBody extends Square {
  constructor(x, y, parent, n) {
    super(x, y, parent);
    this.style.backgroundColor = 'transparent';

    let template = document.getElementById('snake-body');
    let templateContent = template.content;
    this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
    this.innerHTML = "<span slot='number'>" + n +"</span>";
  }
}
customElements.define('app-snake-body', SnakeBody);
