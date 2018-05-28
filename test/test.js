// Imports all data structure:
let DS = require('ds-js-x');
DS.help();

// Imports BinarySearchTree:
let tree = new DS.BinarySearchTree();
tree.help();

// Imports LinkedList:
let list = new DS.LinkedList();
list.help();

// Imports Stack:
let stack = new DS.Stack();
stack.help();

// Imports Queue:
let queue = new DS.Queue();
queue.help();

// Imports Max Heap:
let heap = new DS.PriorityQueue();
heap.help();

// Imports Min Heap:
let max_heap = new DS.PriorityQueue((a, b) => a - b < 0);
max_heap.help();

// Imports Priority Queue:
let prio_queue = new DS.PriorityQueue(comparator);
prio_queue.help();
