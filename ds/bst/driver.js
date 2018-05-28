var BinarySearchTree = require("./bst.js");

var tree = new BinarySearchTree();

for (var x = 0; x < 10; x++) {
    var value = Math.random(100) * 100;
    value = Math.ceil(value);
    console.log("add " + value, tree.add(value));
}

var arr = tree.in_order_traversal();

arr.forEach(x => { // check if insertion successful
    console.log("has " + x, tree.has(x));
});

for (var x = 0; x < 5; x++) {
    var value = Math.random(100) * 100;
    value = Math.ceil(value);
    if (arr.indexOf(value) != -1) {
        x--;
        continue;
    }
    console.log("has " + value, tree.has(value));
}

for (var x = 0; x < 5; x++) {
    console.log("remove " + arr[x], tree.remove(arr[x]));
    tree.in_order_traversal();
}

tree.hologram();

tree.help();
