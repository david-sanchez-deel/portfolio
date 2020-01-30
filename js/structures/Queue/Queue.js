class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  push(e) {
    return this.queue.push(e);
  }

  shift() {
    return this.queue.shift();
  }

  search(e) {
    for (let i = 0; i < this.queue.length; i += 1) {
      if (e === this.queue[i]) {
        return i;
      }
    }
  }

  index(index) {
    return this.queue[index];
  }

  toString() {
    return this.queue.toString()
  }

}
module.exports = { Queue }
