var {BinarySearchTree} = require('./BinarySearchTree');
var assert = require('assert');
console.log(1 & -1);
console.log(2 & -2);
console.log(3 & -3);
console.log(4 & -4);
console.log(5 & -5);
console.log(6 & -6);
const pushResult = [];
const popResult = [];
const searchResult = [];
const test = () => {
  const list = new BinarySearchTree();

  list.insert(8);
  list.insert(10);
  list.insert(3);
  list.insert(6);
  list.insert(1);
  list.insert(14);
  list.insert(4);
  list.insert(7);
  list.insert(13);
  assert(list.toString() === JSON.stringify({'8': [{ '3': [{ '1': [] }, { '6': [{ '4': [] }, { '7': [] }] } ] }, { '10': [{ '14': [{ '13': [] }] }] }] }, null, 2))

  assert(list.search(6).left.value === 4)
  assert(list.search(6).right.value === 7)

  list.remove(3)
  assert(list.toString() === JSON.stringify({'8': [{ '4': [{ '1': [] }, { '6': [{ '7': [] }] } ] }, { '10': [{ '14': [{ '13': [] }] }] }] }, null, 2))
  list.remove(6)
  assert(list.toString() === JSON.stringify({'8': [{ '4': [{ '1': [] }, { '7': [] } ] }, { '10': [{ '14': [{ '13': [] }] }] }] }, null, 2))
  list.remove(14)
  assert(list.toString() === JSON.stringify({'8': [{ '4': [{ '1': [] }, { '7': [] } ] }, { '10': [{ '13': [] }] }] }, null, 2))

}

const measureTimes = (n) => {
  const list = new BinarySearchTree();
  let times = [];
  const inserted = [];
  // Push
  for (let i = 0; i < n; i++) {
    const value = Math.random() * (10*n);
    inserted.push(value);
    startTime = new Date().getTime();
    list.insert(value);
    times.push(new Date().getTime() - startTime);
  }
  pushResult.push(times.reduce((p, c) => c + p, 0) / n);

  // Search
  times = [];
  for (let e of inserted) {
    startTime = new Date().getTime();
    list.search(e);
    times.push(new Date().getTime() - startTime);
  }
  searchResult.push(times.reduce((p, c) => c + p, 0) / n);

  // Pop
  times = [];
  for (let e of inserted) {
    startTime = new Date().getTime();
    list.remove(e);
    times.push(new Date().getTime() - startTime);
  }
  popResult.push(times.reduce((p, c) => c + p, 0) / n);

}
test();
for (let scenario of [10, 100, 1000, 10000, 100000] ) {
  measureTimes(scenario);
}
// Results
console.log('Push', pushResult); // O(1)      Push    [ 0, 0.01 , 0.002 , 0, 0 ]
console.log('Pop', popResult); // O(1)        Pop     [ 0, 0    , 0     , 0, 0 ]
console.log('Search', searchResult); // O(n)  Search  [ 0, 0    , 0.002 , 0, 0 ]
