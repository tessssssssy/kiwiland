import routesOfMaxDistance from './routesOfMaxDistance';
import WeightedGraph from './WeightedGraph';

// jest.mock('./WeightedGraph');
// define the graph

// Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7
// const graph = WeightedGraph.mock.instances[0];
// beforeEach(() => {
// });

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

test('finds the number of paths between two stops less than specified distance', () => {
    // define a graph - beforeeach
      expect(routesOfMaxDistance(graph, "C", "C", 30)).toBe(7);  
});
