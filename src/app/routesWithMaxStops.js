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


const routesWithMaxStops = (graph, start, finish, minStops = 0, maxStops) => {
    let numRoutes = 0;
    // loop over the adjacent nodes until it reaches start or reaches max
    let stops = 0;
    while (stops <= maxStops) {
        graph.pathList[finish].forEach((path) => {
            
        })
    }
    return numRoutes;
}

const breadthFirst = (graph, start) => {
    let queue = [start];
    let result = [start];
    let visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      graph.pathList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
}

console.log(breadthFirst(graph, "A"));

// export default routesWithMaxStops;

