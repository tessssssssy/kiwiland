import PriorityQueue from './PriorityQueue.js';
import getDistance from './getDistance.js';

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

    shortestPath(start, end) {
        let distances = {};
        let priorityQueue = new PriorityQueue();
        let previous = {};
        let smallest;
        let allPaths = [];
        let path = [];
        //loop and add all the vertexes as keys with value infinity
        for (let vertex in this.pathList) {
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
            for (let neighbour in this.pathList[smallest]) {
              let nextNode = this.pathList[smallest][neighbour];
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
        // console.log(previous);
        // console.log(path);
        // return distance of shortest path
        return path.concat(smallest).reverse();
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


console.log(graph.shortestPath("A", "C"));

export default WeightedGraph;

