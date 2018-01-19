

// Instantiate a new graph
var Graph = function() {
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  //create an obj whose value is the value
  var node = {};  
  node.value = value;
  //add that object as a property of this with key = value
  this[value] = node;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  //check if that value has a key:value in the graph  
  if (this[value]) {    
    return true;
  } else {
    return false;
  }  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


