import getDistance from './getDistance';
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

test('calculates direct route distance from A-B-C', () => {
      expect(getDistance(graph, ["A", "B", "C"])).toBe(9);
});

test('calculates direct route distance from A-D', () => {
      expect(getDistance(graph, ["A", "D"])).toBe(5);
});

test('calculates direct route distance from A-D-C', () => {
      expect(getDistance(graph, ["A", "D", "C"])).toBe(13);
});

test('calculates direct route distance from A-E-B-C-D', () => {
      expect(getDistance(graph, ["A", "E", "B", "C", "D"])).toBe(22);
});

test('calculates direct route distance from A-E-D', () => {
      expect(getDistance(graph, ["A", "E", "D"])).toBe("NO SUCH ROUTE");
});