// Imports all data structure:
const DS = require('ds-js-x');
DS.help();

// Imports BinarySearchTree:
const tree = new DS.BinarySearchTree();

// Imports LinkedList:
const list = new DS.LinkedList();

// Imports Stack:
const stack = new DS.Stack();

// Imports Queue:
const queue = new DS.Queue();

// Imports Max Heap:
const heap = new DS.PriorityQueue();

// Imports Min Heap:
const comparator = (a, b) => a - b < 0;
const minHeap = new DS.PriorityQueue((a, b) => a - b < 0);

// Imports Priority Queue:
const customComparator = (a, b) => a - b > 0;
const maxHeap = new DS.PriorityQueue(comparator);
