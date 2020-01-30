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


/* process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
}); */


var fs = require('fs');
var data = fs.readFileSync(process.cwd() +'/js/hackerrank/ctci-bfs-shortest-reach.txt').toString();

/// Utils
class UndirectedWeightedGraph {
  constructor(nVertex)
  {
      this.nVertex = nVertex;
      this.nodes = [];
      this.edges = {};
      this.map = {};
      for (let i = 1; i <= nVertex; i ++) {
        this.addNode(i);
      }
  }

  addNode(key) {
    this.nodes.push(key.toString());
  }

  addEdge(a, b, weight) {
    this.edges[a] = (this.edges[a] || []);
    this.edges[a].push({ node: b, weight });
    this.edges[b] = (this.edges[b] || []);
    this.edges[b].push({ node: a, weight });
  }

  djikstraAlgorithm(startNode) {
    let distances = {};

    // Stores the reference to previous nodes
    let prev = {};
    let pq = new PriorityQueue(this.nodes.length * this.nodes.length);

    // Set distances to all nodes to be infinite except startNode
    distances[startNode] = 0;
    pq.enqueue(startNode, 0);
    this.nodes.forEach(node => {
       if (node !== startNode) distances[node] = Infinity;
       prev[node] = null;
    });

    while (!pq.isEmpty()) {
       let { element: currNode } = pq.dequeue();
       (this.edges[currNode] || []).forEach(neighbor => {
          let alt = distances[currNode] + neighbor.weight;
          if (alt < distances[neighbor.node]) {
             distances[neighbor.node] = alt;
             prev[neighbor.node] = currNode;
             pq.enqueue(neighbor.node, distances[neighbor.node]);
          }
       });
    }
    return distances;
 }
}

function processData(input) {
  const [queries, ...lines] = input.split('\n');
  let cursor = 0;
  for (let query = 0; query < queries; query += 1) {
    const [nNodes, nEdges] = lines[cursor++].split(' ');
    var graph = new UndirectedWeightedGraph(nNodes);
    // Add
    for (let nEdge = 0; nEdge < nEdges; nEdge += 1) {
      graph.addEdge(...lines[cursor++].split(' '), 6);
    }
    const start = lines[cursor++];
    const distances = graph.djikstraAlgorithm(start)
    const r = [];
    Object.entries(distances).forEach(([key, value]) => {
      if (key === start) {
        return;
      }
      r.push(value === Infinity ? -1 : value);
    })
  console.log(r.join(' '))
  }
}

const res = [];
console.log =  (val) => res.push(val);
processData(data);

var assert = require('assert').strict;

assert.equal(res, fs.readFileSync(process.cwd() +'/js/hackerrank/ctci-bfs-shortest-reach-output.txt').toString().split('\n'));
