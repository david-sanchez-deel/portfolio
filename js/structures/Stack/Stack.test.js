var {Stack} = require('./Stack');
var assert = require('assert');

const pushResult = [];
const popResult = [];
const searchResult = [];
const indexResult = [];
const test = () => {
  const list = new Stack();

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

  assert(list.pop() === 5 && list.length === 2)
  assert(list.pop() === 3 && list.length === 1)
  assert(list.pop() === 1 && list.length === 0)
}

const measureTimes = (n) => {
  const list = new Stack();
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


  // Pop
  times = [];
  for (let i = 0; i < n; i++) {
    startTime = new Date().getTime();
    list.pop(i);
    times.push(new Date().getTime() - startTime);
  }
  popResult.push(times.reduce((p, c) => c + p, 0) / n);
}
test();
for (let scenario of [10, 100, 1000, 10000, 100000] ) {
  measureTimes(scenario);
}
// Results
console.log('Push', pushResult); // O(1)      Push    [ 0, 0, 0     , 0     , 0 ]
console.log('Pop', popResult); // O(1)        Pop     [ 0, 0, 0     , 0     , 0 ]
console.log('Search', searchResult); // O(n)  Search  [ 0, 0, 0.004 , 0.0035, 0.03835 ]
console.log('Index', indexResult); // O(1)    Index   [ 0, 0, 0     , 0     , 0 ]
