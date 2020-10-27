import shortestPath from './shortestPath';
import WeightedGraph from './WeightedGraph';

// Graph: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7



    test('calculates the shortest distance between two stops', () => {
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
          expect(shortestPath(graph, ["A", "C"])).toBe(9);
          expect(shortestPath(graph, ["B", "B"])).toBe(9);
    });

