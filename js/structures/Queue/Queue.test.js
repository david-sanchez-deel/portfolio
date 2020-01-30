var {Queue} = require('./Queue');
var assert = require('assert');

const pushResult = [];
const shiftResult = [];
const searchResult = [];
const indexResult = [];
const test = () => {
  const list = new Queue();

  list.push(1);
  list.push(3);
  list.push(5);
  assert(list.toString() === '1,3,5');

  assert(list.length === 3);

  assert(list.search(1) === 0)
  assert(list.search(3) === 1)
  assert(list.search(5) === 2)

  assert(list.index(0) === 1)
  assert(list.index(1) === 3)
  assert(list.index(2) === 5)

  assert(list.shift() === 1)
  assert(list.shift() === 3)
  assert(list.shift() === 5)
}

const measureTimes = (n) => {
  const list = new Queue();
  let times = [];
  // Push
  for (let i = 0; i < n; i++) {
    startTime = new Date().getTime();
    list.push(i);
    times.push(new Date().getTime() - startTime);
  }
  pushResult.push(times.reduce((p, c) => c + p, 0) / n);

  // Search
  times = [];
  for (let i = 0; i < n; i++) {
    startTime = new Date().getTime();
    list.search(i);
    times.push(new Date().getTime() - startTime);
  }
  searchResult.push(times.reduce((p, c) => c + p, 0) / n);

  // Index
  times = [];
  for (let i = 0; i < n; i++) {
    startTime = new Date().getTime();
    list.index(i);
    times.push(new Date().getTime() - startTime);
  }
  indexResult.push(times.reduce((p, c) => c + p, 0) / n);

  // Shift
  times = [];
  for (let i = 0; i < n; i++) {
    startTime = new Date().getTime();
    list.shift(i);
    times.push(new Date().getTime() - startTime);
  }
  shiftResult.push(times.reduce((p, c) => c + p, 0) / n);
}
test();
for (let scenario of [10, 100, 1000, 10000, 100000] ) {
  measureTimes(scenario);
}
// Results
console.log('Push', pushResult); //     O(1)  Push    [ 0, 0    , 0     , 0     , 0       ]
console.log('Shift', shiftResult); //   O(1)  Shift   [ 0, 0    , 0     , 0     , 0.00892 ]
console.log('Search', searchResult); // O(n)  Search  [ 0, 0.01 , 0.003 , 0.0039, 0.0374  ]
console.log('Index', indexResult); //   O(1)  Index   [ 0, 0    , 0     , 0     , 0       ]
