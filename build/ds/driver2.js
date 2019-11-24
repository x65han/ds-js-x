var BinarySearchTree = require("./bst.js");

var tree = new BinarySearchTree();

var input = [3, 1, 9];
for (var x = 0; x < input.length; x++) {
    var value = input[x];
    console.log("add " + value, tree.add(value));
}

console.log(tree.in_order_traversal());

console.log("bread width traveral", tree.hologram());
console.log("max depth", tree.max_depth());
