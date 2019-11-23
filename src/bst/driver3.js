var BinarySearchTree = require("./bst.js");

var tree = new BinarySearchTree();

console.log("add " + 3, tree.add(3));
console.log("add " + 1, tree.add(1));
console.log("add " + 0, tree.add(0));
console.log("add " + 5, tree.add(5));
console.log("add " + 9, tree.add(9));
console.log("add " + 2, tree.add(2));
console.log("add " + 4, tree.add(4));

var arr = tree.in_order_traversal();
console.log(arr);
tree.hologram();
