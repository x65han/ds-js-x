# ds-js-x

JavaScript Data Structure Library
Currently supports:
- LinkedList
- Stack
- Queue
- Binary Search Tree
- Max Heap
- Min Heap
- Priority Queue

# Installation
```sh
npm i --save ds-js-x
```

# Usage

```diff
- Imports all data structure:
+ let DS = require('ds-js-x');

-Imports BinarySearchTree:
+ let tree = new DS.BinarySearchTree();
+ tree.help();

-Imports LinkedList:
+ let list = new DS.LinkedList();
+ list.help();

- Imports Stack:
+ let stack = new DS.Stack();
+ stack.help();

- Imports Queue:
+ let queue = new DS.Queue();
+ queue.help();

- Imports Max Heap:
+ let heap = new DS.PriorityQueue();
+ heap.help();

- Imports Min Heap:
+ let heap = new DS.PriorityQueue((a, b) => a - b < 0);
+ heap.help();

- Imports Priority Queue:
+ let queue = new DS.PriorityQueue(comparator);
+ queue.help();
```
