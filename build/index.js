require('colors');

const LinkedList = require('./ds/LinkedList.js');
const Stack = require('./ds/Stack.js');
const DisjointSet = require('./ds/DisjointSet.js');
const Queue = require('./ds/Queue.js');
const PriorityQueue = require('./ds/PriorityQueue.js');
const SegmentTree = require('./ds/SegmentTree.js');
const BinarySearchTree = require('./ds/BinarySearchTree.js');

const exports = {
    LinkedList,
    Stack,
    DisjointSet,
    Queue,
    PriorityQueue,
    SegmentTree,
    BinarySearchTree,
    help: function () {
        console.log(`\n`);
        console.log('\nImports all data structure:'.red);
        console.log(`> let DS = require('ds-js-x');`.green);

        console.log('\nImports BinarySearchTree:'.red);
        console.log(`> let tree = new DS.BinarySearchTree();`.green);
        console.log(`> tree.help();`.green);

        console.log('\nImports LinkedList:'.red);
        console.log(`> let list = new DS.LinkedList();`.green);
        console.log(`> list.help();`.green);

        console.log('\nImports Stack:'.red);
        console.log(`> let stack = new DS.Stack();`.green);
        console.log(`> stack.help();`.green);

        console.log('\nImports Queue:'.red);
        console.log(`> let queue = new DS.Queue();`.green);
        console.log(`> queue.help();`.green);

        console.log('\nImports Max Heap:'.red);
        console.log(`> let heap = new DS.PriorityQueue();`.green);
        console.log(`> heap.help();`.green);

        console.log('\nImports Min Heap:'.red);
        console.log(`> let heap = new DS.PriorityQueue((a, b) => a - b < 0);`.green);
        console.log(`> heap.help();`.green);

        console.log('\nImports Priority Queue:'.red);
        console.log(`> let queue = new DS.PriorityQueue(comparator);`.green);
        console.log(`> queue.help();`.green);

        console.log(`\n`);
    }
}

module.exports = exports
