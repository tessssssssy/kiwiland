
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

export default WeightedGraph;

