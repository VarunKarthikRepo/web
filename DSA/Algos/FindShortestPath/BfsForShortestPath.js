/*  BREADTH FIRST SEARCH (BFS)
    Used for TRAVERSAL of a graph
    GOAL could be to visit all the nodes or find the shortest path in UNWEIGHTED paths.
    Uses a queue and assumes all the weights of the edges to be equal.
*/


function bfsForShortestPath(graph, start, end) {
  let visited = new Set(); // Set to keep track of visited nodes so we don't revisit them
  let queue = [[start]]; // Initialize queue with the starting point wrapped in an array (path)

  // Loop until the queue is empty
  while (queue.length > 0) {
    const path = queue.shift(); // Remove the first path from the queue (FIFO)
    const node = path[path.length - 1]; // Get the last node from the current path

    if (node === end) return path;  // If we’ve reached the end node, return the full path

    // If this node hasn’t been visited yet
    if (!visited.has(node)) {
      visited.add(node); // Mark it as visited

      // Loop through all its neighbors
      for (const neighbor of graph[node]) {
        queue.push([...path, neighbor]); // Push a new path to the queue, extending the current path with the neighbor
      }
    }
  }
  return null; // If no path was found, return null
}

// Define a directed graph using an adjacency list
const graph = {
  A: ["B", "C"], // A connects to B and C
  B: ["D"], // B connects to D
  C: ["E"], // C connects to E
  D: ["F"], // D connects to F
  E: ["F"], // E connects to F
  F: [], // F is an end node with no outgoing edges
};

console.log(bfsForShortestPath(graph, "A", "F")); // Output: [ 'A', 'B', 'D', 'F' ]
