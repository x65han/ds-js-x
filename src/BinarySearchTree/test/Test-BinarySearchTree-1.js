"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("../BinarySearchTree");
var assert_1 = require("assert");
var colors = require("colors");
var tree = new BinarySearchTree_1["default"]();
var LENGTH = 999;
for (var i = 0; i < LENGTH; i++) {
    var value = Math.random() * 1000 >> 1;
    tree.add(value);
}
var vals = tree.inOrderTraversal();
for (var i = 1; i < vals.length; i++) {
    var pre = vals[i - 1];
    var now = vals[i];
    if (pre > now) {
        throw ('In Order Traversal should be non-decreasing.');
    }
}
for (var _i = 0, vals_1 = vals; _i < vals_1.length; _i++) {
    var val = vals_1[_i];
    assert_1.strict.equal(true, tree.has(val));
}
var randomValues = new Array();
for (var i = 0; i < LENGTH >> 1; i++) {
    var index = Math.random() * LENGTH;
    var value = vals[index];
    if (randomValues.includes(value) === false) {
        randomValues.push(value);
    }
}
for (var _a = 0, randomValues_1 = randomValues; _a < randomValues_1.length; _a++) {
    var val = randomValues_1[_a];
    tree.remove(val);
    assert_1.strict.equal(false, tree.has(val));
}
console.log(colors.green('Passed!'));
//# sourceMappingURL=Test-BinarySearchTree-1.js.map