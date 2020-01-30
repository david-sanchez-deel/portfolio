class Node {
  constructor(e) {
    this.left = null;
    this.parent = null;
    this.right = null;
    this.value = e;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert (e, node = null) {
    const nodeToInsert = new Node(e);
    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }
    if (!node) {
      node = this.root;
    }
    if (e >= node.value) {
      if (!node.right) {
        nodeToInsert.parent = node;
        return node.right = nodeToInsert;
      }
      return this.insert(e, node.right);
    }
    if (!node.left) {
      nodeToInsert.parent = node;
      return node.left = nodeToInsert;
    }
    return this.insert(e, node.left);
  }

  search (e, node = null) {
    if (!this.root) {
      return null;
    }
    if (node === null) {
      return this.search(e, this.root);
    }
    if (e === node.value) {
      return node;
    }
    if (e >= node.value) {
      return this.search(e, node.right);
    }
    if (e < node.value) {
      return this.search(e, node.left);
    }
    return null;
  }

  remove (e, node = null) {
    if (node === null) {
      node = this.search(e, this.root);
    }
    if (node) {
      if (!node.parent) {
        this.root = null;
        return;
      }
      const nextBigger = node.right ? this.getLowestNode(node.right) : node.left
      // Delete parent associations
      nextBigger.parent.left === nextBigger ? nextBigger.parent.left = null : null;
      nextBigger.parent.right === nextBigger ? nextBigger.parent.right = null : null;
      // Associate to new parent
      node.parent.left == node ? node.parent.left = nextBigger : null;
      node.parent.right == node ? node.parent.right = nextBigger : null;
      nextBigger.left = node.left;
      nextBigger.right = node.right;
      if (node.left) {
        node.left.parent = nextBigger;
      }
      nextBigger.right = node.right;
      if (node  .right) {
        node.right.parent = nextBigger;
      }
      nextBigger.parent = node.parent;
    }
  }

  getLowestNode(node) {
    return node.left ? this.getLowestNode(node.left) : (node.right ? this.getLowestNode(node.right) : node);
  }


  toString(node = null) {
    if (!node) {
      return JSON.stringify(this.toString(this.root), null, 2);
    }
    if (!node.left && !node.right) {
      return { [node.value]: [] };
    }
    if (node.left && node.right) {
      return { [node.value]: [this.toString(node.left), this.toString(node.right)] };
    }
    if (node.left) {
      return { [node.value]: [this.toString(node.left)] };
    }
    if (node.right) {
      return { [node.value]: [this.toString(node.right)] };
    }
    return result;
  }
}
module.exports = { BinarySearchTree }
