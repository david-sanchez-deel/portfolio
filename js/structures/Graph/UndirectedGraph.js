class UndirectedGraph {
  constructor(nVertex)
  {
      this.nVertex = nVertex;
      this.vertexMap = new Map();
  }

  addVertex(v) {
    this.vertexMap.set(v, []);
  }

  addEdge(v, w) {
    this.vertexMap.get(v).push(w);
    this.vertexMap.get(w).push(v);
  }

  printGraph() {
    var vertexKeys = this.vertexMap.keys();
    for (var i of vertexKeys) {
      var vertexValues = this.vertexMap.get(i);
      var conc = "";
      for (var j of vertexValues) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  }
}
var g = new UndirectedGraph(6);
[ 'A', 'B', 'C', 'D', 'E', 'F' ].forEach((e) => g.addVertex(e));
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.printGraph();
