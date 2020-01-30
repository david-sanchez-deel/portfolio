class PriorityQueue {

  // An array is used to implement priority
  constructor()
  {
      this.items = [];
  }

  enqueue(element, priority) {
    // creating object from queue element
    var qElement = { element, priority};
    var contain = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
        this.items.push(qElement);
    }
  }

  isEmpty() {
    return !this.items.length;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
}
