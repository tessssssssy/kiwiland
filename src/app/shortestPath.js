// shortest path (Dijkstras Algorithm)

import PriorityQueue from './PriorityQueue.js';
import WeightedGraph from './WeightedGraph.js';
import getDistance from './getDistance.js';

const shortestPath = (graph, start, end) => {
    let distances = {};
    let priorityQueue = new PriorityQueue();
    let previous = {};
    let smallest;
    let path = [];
    //loop and add all the vertexes as keys with value infinity
    for (let vertex in graph.pathList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
        // console.log(priorityQueue)
      }
      previous[vertex] = null;
    }
    while (priorityQueue.values.length) {
      smallest = priorityQueue.dequeue().val;
      if (smallest === end) {
        //build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in graph.pathList[smallest]) {
          let nextNode = graph.pathList[smallest][neighbour];
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            //updating new smallest distance
            distances[nextNode.node] = candidate;
            //updating previous
            previous[nextNode.node] = smallest;
            //enqueue priority queue
            priorityQueue.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    // console.log(distances);
    // console.log(previous);
    // console.log(path);
    // return distance of shortest path
    return getDistance(graph, path.concat(smallest).reverse());
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

const path = shortestPath(graph, "A", "C");
// console.log(path);
// console.log(getDistance(graph, path));

export default shortestPath;

