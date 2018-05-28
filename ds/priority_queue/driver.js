var PriorityQueue = require("./priority_queue.js");

// driver
var queue = new PriorityQueue();
queue.push(3);
queue.push(2);
queue.push(1);
queue.push(0);
queue.print();
let size = queue.size;
for (let i = 0; i < size; i++) {
  console.log(queue.pop());
}

console.log('-=-=-=-=-=-=-=-=');

queue = new PriorityQueue((a, b) => a - b < 0);
queue.assign([5, 4, 3, 2, 1, 2, 5, 1, 2, 4, 1, 2, 6, 7]);
queue.print();
size = queue.size;
for (let i = 0; i < size; i++) {
  console.log(queue.pop());
}

queue.help();