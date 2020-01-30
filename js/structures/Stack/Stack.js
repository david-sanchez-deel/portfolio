class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(e) {
    return this.stack.push(e);
  }

  pop() {
    return this.stack.pop();
  }

  search(e) {
    for (let i = 0; i < this.stack.length; i += 1) {
      if (e === this.stack[i]) {
        return i;
      }
    }
  }

  index(index) {
    return this.stack[index];
  }

  toString() {
    return this.stack.toString()
  }

}
module.exports = { Stack }
