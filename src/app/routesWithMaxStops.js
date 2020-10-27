// takes a route and a number

// "C" "C" - max 3 stops
// "A" "C" - min 3, max 3 stops
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

// console.log(graph.pathList);

const pathCounter = (graph, start, finish) => {
    let currentPath = [];
    let paths = [];
    // initializes visited array
    let visited = {};
    Object.keys(graph.pathList).forEach((vertex) => {
    visited[vertex] = false;
    });
    depthFirstSearch(graph, start, finish, visited, currentPath, paths)
    return paths;
}

const depthFirstSearch = (graph, start, finish, visited, currentPath, paths) => {
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
        depthFirstSearch(node, finish)
    }
    currentPath.pop();
    visited[start] = false;
}

console.log(pathCounter(graph, "A", "C"));

// export default routesWithMaxStops;

