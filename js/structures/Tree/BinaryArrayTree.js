class BinaryArrayTree {
  constructor() {
    this.stack = [1];
    this.level = 1;
    this.nextRoot = 0;
  }

  insert (left, right) {
    // const roots = 2 ** (level - 1)
    let queue = undefined;
    if (this.stack[this.nextRoot] === -1) {
      queue = this.insert.bind(this, left, right);
      left = -1;
      right = -1;
    }
    // Left
    this.stack.splice(this.nextRoot, 0, left);
    this.nextRoot += 1;
    // Right
    this.stack.splice(this.nextRoot + 1, 0,  right)

    this.nextRoot += 3
    if (this.nextRoot > this.stack.length) {
      this.nextRoot = 0;
      this.level += 1;
    }
    if (queue) {
      queue();
    }
  }

  output() {
    return this.stack.filter(e => e !== -1).join(' ')
  }

  swap(level) {
    const gap = (this.level - 1) * (level);
    const center = parseInt(this.stack.length / 2, 10);
    // Change left
    for (let i = center - gap; i >= 0; i -=gap) {
      // 15, 45
      console.log('Change', i, this.stack[i]);
    }
  }

  swapRange(start, end) {
    if (end - start > 1) {
      return [...this.swapRange(parseInt((end - start) / 2, 10) + 1, end), ...this.swapRange(start, parseInt((end - start) / 2, 10))];
    }
    return [this.stack[end], this.stack[start]];
  }
}
let tree = new BinaryArrayTree();

var assert = require('assert').strict;
tree = new BinaryArrayTree();
tree.insert(2, 3);
assert.strictEqual(tree.stack.toString(), [2, 1, 3].toString());
tree.insert(4, -1);
assert.strictEqual(tree.stack.toString(), [4, 2, -1, 1, 3].toString()); // next to change is 1
tree.insert(5, -1);
assert.strictEqual(tree.stack.toString(), [4, 2, -1, 1, 5, 3, -1].toString()); // next to change is 1
tree.insert(6, -1);
assert.strictEqual(tree.stack.toString(), [6, 4, -1, 2, -1, 1, 5, 3, -1].toString());
tree.insert(7, 8);
assert.strictEqual(tree.stack.toString(), [6, 4, -1, 2, -1, -1, -1, 1, 7, 5, 8, 3, -1].toString());
tree.insert(-1, 9);
assert.strictEqual(tree.stack.toString(), [-1, 6, 9, 4, -1, 2, -1, -1, -1, 1, 7, 5, 8, 3, -1, -1, -1].toString());
tree.insert(-1, -1);
assert.strictEqual(tree.stack.toString(), [-1, 6, 9, 4, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, 1, -1, 7, -1, 5, 8, 3, -1, -1, -1].toString());
tree.insert(10, 11);
assert.strictEqual(tree.stack.toString(), [-1, 6, 9, 4, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, 1, -1, 7, -1, 5, 10, 8, 11, 3, -1, -1, -1].toString());
tree.insert(-1, -1);
// assert.strictEqual(tree.stack.toString(), [-1, -1, -1, 6, -1, 9, -1, 4, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, 1, -1, 7, -1, 5, 10, 8, 11, 3, -1, -1, -1, -1, -1, -1, -1].toString());
tree.insert(-1, -1);
// assert.strictEqual(tree.stack.toString(), [-1, -1, -1, 6, -1, 9, -1, 4, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, 1, -1, 7, -1, 5, 10, 8, -1, 11, -1, 3, -1, -1, -1].toString());
console.log(tree.output());
tree.swap(2);
