
class WeightedGraph {
    constructor() {
        this.pathList = {};
    }
    addVertex(vertex) {
        if (!this.pathList[vertex]) this.pathList[vertex] = [];
    }
    // one direction
    addEdge(start, finish, weight) {
        this.pathList[start].push({ node: finish, weight });
    }

}


const graph = new WeightedGraph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addEdge("A", "B", 5);
        graph.addEdge("B", "C", 4);
        graph.addEdge("C", "D", 8);
        graph.addEdge("D", "C", 8);
        graph.addEdge("D", "E", 6);
        graph.addEdge("A", "D", 5);
        graph.addEdge("C", "E", 2);
        graph.addEdge("E", "B", 3);
        graph.addEdge("A", "E", 7); 
console.log(graph.pathList);

export default WeightedGraph;

