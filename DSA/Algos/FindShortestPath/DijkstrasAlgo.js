/* Dijkstra's Algorithm — a cornerstone of graph algorithms, especially useful for finding the shortest path from a starting node to all other nodes in a weighted graph. 
    
    Real-World Problems Solved by Dijkstra:
    - Google Maps / GPS Navigation
    - Network routing protocols (like OSPF)
    - Game AI pathfinding
    - Social network suggestions


    ✅ Advantages of Dijkstra’s Algorithm
    - Efficient for sparse graphs with positive weights.
    - Can be optimized using min-heaps / priority queues.
    - Well-established, easy to understand.

    ❌ Disadvantages
    - Doesn’t work with negative edge weights.
    - Can be inefficient in dense graphs without heap optimization.
    - Slower than A* in grid-based pathfinding when heuristics are known.

*/

function Dijkstra(graph, start) {
  let distances = {};
  let visited = new Set();
  let priorityQueue = new Map();

  // Step-1: Initialize all the nodes to infinity
  for (let node in graph) {
    distances[node] = Infinity;
    priorityQueue.set(node, Infinity);
  }

  distances[start] = 0; // distance of the starting node will be 0
  priorityQueue.set(start, 0);

  // Step-2: process all the nodes in priority queue
  while (priorityQueue.size > 0) {
    const currentNode = [...priorityQueue.entries()].reduce((a, b) =>
      a[1] < b[1] ? a : b
    )[0];

    const currentDistance = distances[currentNode];

    priorityQueue.delete(currentNode);

    //Step-3: check each neighbor of the current node
    for (let neighbor in graph[currentNode]) {
      if (!visited.has(neighbor)) {
        const newDist = currentDistance + graph[currentNode][neighbor];

        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          priorityQueue.set(neighbor, newDist);
        }
      }
    }
  }
  return distances;
}

// Example graph
const graph = {
  A: { B: 2, C: 4 },
  B: { A: 2, C: 1, D: 7 },
  C: { A: 4, B: 1, D: 3 },
  D: { B: 7, C: 3 },
};


console.log(Dijkstra(graph, "A"));