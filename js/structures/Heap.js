class Heap {
  constructor() {
    this.heapq = {};
    this.stack = [];
  }

  cmplt(x, y) {
    return +x < +y;
  };

  get length() {
    return this.stack.length;
  }

  push(item) {
    this.stack.push(item);
    this.siftdown(0, this.cmp);
  };

  pop(heap, cmp) {
    if (heap.length > 0) {
      var last = heap.pop();

      if (heap.length > 0) {
        var head = heap[0];
        heap[0] = last;
        siftup(heap, 0, cmp || cmplt);
        return head;
      } else {
        return last;
      }
    }
  };

  // get the top item, O(1)
  top() {
    return this.peek(0)
  };

  peek(index) {
    if (this.stack.length !== 0){
      return this.stack[index];
    }
  }

// transform array `heap` into a heap in-place, O(nlog n)
  heapify(arr, cmp) {
    cmp = cmp || cmplt;

    for (var idx = Math.floor(arr.length / 2) - 1;
         idx >= 0; --idx)
      siftup(arr, idx, cmp);
    return arr;
  };

  // heap sort, O(nlog n)
  heapsort(arr, cmp) {
  var heap = [];

  for (var i = 0; i < arr.length; ++i)
    heapq.push(heap, arr[i], cmp);

  var arr_ = [];

  while (heap.length > 0)
    arr_.push(heapq.pop(heap, cmp));
  return arr_;
};

siftdown(startIdx) {
  let idx = this.stack.length - 1;
  var item = this.stack[idx];

  while (idx > startIdx) {
    var parentIdx = (idx - 1) >> 1;
    var parentItem = this.stack[parentIdx];
    if (this.cmplt(item, parentItem)) {
      this.stack[idx] = parentItem;
      idx = parentIdx;
      continue;
    }
    break;
  }

  this.stack[idx] = item;
}

siftup(heap, idx, cmp) {
  var endIdx = heap.length;
  var startIdx = idx;
  var item = heap[idx];

  var childIdx = idx * 2 + 1;

  while (childIdx < endIdx) {
    var rightIdx = childIdx + 1;

    if (rightIdx < endIdx && (!cmp(
      heap[childIdx], heap[rightIdx]))) {
      childIdx = rightIdx;
    }
    heap[idx] = heap[childIdx];
    idx = childIdx;
    childIdx =  idx * 2 + 1;
  }

  heap[idx] = item;
  siftdown(heap, startIdx, idx, cmp);
}
}

const heap = new Heap();
heap.push([3, 'a']);
heap.push([4, 'b']);
heap.push([2, 'c']);
heap.push([1, 'd']);

heap.pop(heap, cmp);  // [1, 'd']
heap.pop(heap, cmp);  // [2, 'c']
