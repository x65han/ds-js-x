"use strict";
exports.__esModule = true;
var DisjointSet_1 = require("../DisjointSet");
var assert_1 = require("assert");
var colors = require("colors");
var ds = new DisjointSet_1["default"]();
for (var i = 1; i <= 7; i++) {
    ds.makeSet(i);
}
ds.union(1, 2);
ds.union(2, 3);
ds.union(4, 5);
ds.union(6, 7);
ds.union(5, 6);
ds.union(3, 7);
for (var i = 1; i <= 7; i++) {
    var res = ds.findSet(i);
    assert_1.strict.equal(res, 4);
}
console.log(colors.green('Passed!'));
//# sourceMappingURL=Test-DisjointSet-1.js.map