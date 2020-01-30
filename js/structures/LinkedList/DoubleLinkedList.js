class Node {
  constructor(e) {
    this.next = null;
    this.previous = null;
    this.value = e;
  }

  toString() {
    return (this.previous ? `${this.previous.value} <-- ` : '') + this.value + (this.next ? ` --> ${this.next.value}` : '')
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  push(e) {
    this.length += 1;
    const node = new Node(e);
    if (!this.head) {
      this.head = node;
      this.last = node;
    } else {
      node.previous = this.last;
      this.last.next = node;
      this.last = node;
    }
  }

  pop() {
    if (!this.length) {
      return null;
    }
    let res = null;
    this.length -= 1;
    if (!this.length) {
      res = this.last.value;
      this.last = null;
      this.head = null;
      return res;
    }
    res = this.last.value;
    this.last.previous.next = null;
    this.last = this.last.previous;
    return res;
  }

  search(e) {
    if (!this.length) {
      return null;
    }
    let index = 0;
    let node = this.head;
    do {
      if (node.value === e) {
        return index;
      }
      node = node.next;
      index += 1;
    } while (node)
    return -1;
  }

  index(index) {
    if (!this.length) {
      return null;
    }
    let node = this.head
    for (let actual = 0; actual < index; actual += 1) {
      node = node.next;
    }
    return node.value;
  }

  toString(node = null) {
    if (!node) {
      return this.head ? (this.head.value + '<-->' + this.toString(this.head.next)) : 'empty';
    } else {
      return node.value + (node.next ? '<-->' +  this.toString(node.next) : '');
    }
  }
}
module.exports = { DoubleLinkedList }
