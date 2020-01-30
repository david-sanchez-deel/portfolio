class UndirectedWeightedGraph {
  constructor(nVertex)
  {
      this.nVertex = nVertex;
      this.nodes = [];
      this.edges = {};
      this.map = {};
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
var g = new UndirectedWeightedGraph(7);
[ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ].forEach((e) => g.addNode(e));
g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 3);
g.addEdge('A', 'E', 7);
g.addEdge('B', 'D', 5);
g.addEdge('B', 'C', 6);
g.addEdge('C', 'D', 11);
g.addEdge('C', 'E', 8);
g.addEdge('D', 'E', 2);
g.addEdge('D', 'F', 2);
g.addEdge('D', 'G', 10);
g.addEdge('E', 'G', 5);
g.addEdge('G', 'F', 3);
g.djikstraAlgorithm('A');
Object.values(g.vertexMap).forEach(vertex => {
  console.log(vertex.key, '\t', vertex.distance, '\t', vertex.path)
})
