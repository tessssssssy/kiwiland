import WeightedGraph from './WeightedGraph.js';

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

const pathCounter = (graph, start, finish) => {
    console.log(start)
    let currentPath = [];
    let paths = [];
    // initializes visited array
    let visited = {};
    Object.keys(graph.pathList).forEach((vertex) => {
    visited[vertex] = false;
    // console.log(visited)
    });
    console.log(visited);

    const depthFirstSearch = (graph, start, finish) => {
        // console.log(graph.pathList);
        if (visited[start] = true) return;
        visited[start] = true;
        currentPath.push(start);
        if (start === finish) {
            paths.push(currentPath);
            visited[start] = false;
            currentPath.pop();
            return;
        }
        for (node in graph.pathList[start]) {
            console.log(node);
            depthFirstSearch(graph, node, finish)
        }
        currentPath.pop();
        visited[start] = false;
    }

    depthFirstSearch(graph, start, finish)
    return paths;
}

console.log(pathCounter(graph, "A", "C"));
export default pathCounter;