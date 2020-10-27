
// calculate the total distance for a route (array of stops)
// must be a direct route, if no route return 

// Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7
// import WeightedGraph from './WeightedGraph.js';

const getDistance = (graph, stops) => {
    let distance = 0;
    let counter = 0;
    for (let i = 0; i < stops.length - 1; i++) {
        graph.pathList[stops[i]].forEach((path) => {
            if (path.node === stops[i + 1]) {
                distance += path.weight;
                counter++
            }
        })
        if (counter <= i) return 'NO SUCH ROUTE';
    }
    return distance;
}

// const graph = new WeightedGraph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addEdge("A", "B", 5);
// graph.addEdge("B", "C", 4);
// graph.addEdge("C", "D", 8);
// graph.addEdge("D", "C", 8);
// graph.addEdge("D", "E", 6);
// graph.addEdge("A", "D", 5);
// graph.addEdge("C", "E", 2);
// graph.addEdge("E", "B", 3);
// graph.addEdge("A", "E", 7); 

// console.log(getDistance(graph, ['A', 'B', 'C']));

export default getDistance;