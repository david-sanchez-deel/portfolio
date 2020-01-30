
class SortedList {
  constructor() {
    this.stack = [];
  }

  sortedIndex(value) {
    var low = 0,
        high = this.stack.length;

    while (low < high) {
        var mid = low + high >>> 1;
        if (this.stack[mid] < value) low = mid + 1;
        else high = mid;
    }
    return low;
  }

  push(e) {
    this.stack.splice(this.sortedIndex(e), 0, e);
  }

  pop() {
    return this.stack.pop();
  }
}
module.exports = { SortedList }
