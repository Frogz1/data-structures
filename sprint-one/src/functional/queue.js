var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var nextKey = Object.keys(storage).length;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
  };

  someInstance.dequeue = function() {
    count--;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };

  return someInstance;
};
