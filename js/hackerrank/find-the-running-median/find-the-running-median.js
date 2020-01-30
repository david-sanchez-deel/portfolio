function sortedIndex(array, value) {
	var low = 0,
		high = array.length;

	while (low < high) {
		var mid = low + high >>> 1;
		if (array[mid] < value) low = mid + 1;
		else high = mid;
	}
	return low;
}

function runningMedian(a) {
  const stack = [];
  const results = [];
  for (const value of a) {
      stack.splice(sortedIndex(stack, value), 0, value);
      const middle = stack.length / 2;
      if (stack.length % 2 === 0) {
          results.push(((stack[middle] + stack[middle - 1]) / 2).toFixed(1))
      } else {
          results.push(stack[parseInt(middle, 10)].toFixed(1))
      }
  }
  return results;

}

var fs = require('fs');
var data = fs.readFileSync(process.cwd() +'/js/hackerrank/find-the-running-median/find-the-running-median.txt').toString();
const [queries, ...lines] = data.split('\n');
const a = [];
for (let aItr = 0; aItr < queries; aItr++) {
  const aItem = parseInt(lines[aItr], 10);
  a.push(aItem);
}
const result = runningMedian(a);

var assert = require('assert').strict;
assert.equal(result, fs.readFileSync(process.cwd() +'/js/hackerrank/find-the-running-median/find-the-running-median-output.txt').toString().split('\n'));
