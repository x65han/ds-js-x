const LinkedList = require('./ds/LinkedList.js');
const Stack = require('./ds/Stack.js');
const DisjointSet = require('./ds/DisjointSet.js');
const Queue = require('./ds/Queue.js');
const PriorityQueue = require('./ds/PriorityQueue.js');
const SegmentTree = require('./ds/SegmentTree.js');
const BinarySearchTree = require('./ds/BinarySearchTree.js');

module.exports = {
	LinkedList: LinkedList.default,
	Stack: Stack.default,
	DisjointSet: DisjointSet.default,
	Queue: Queue.default,
	PriorityQueue: PriorityQueue.default,
	SegmentTree: SegmentTree.default,
	BinarySearchTree: BinarySearchTree.default,
	help: function() {
		console.log('\nDocumentation: https://ds-js-x.herokuapp.com');
	},
};
