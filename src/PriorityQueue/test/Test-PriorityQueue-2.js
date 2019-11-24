"use strict";
exports.__esModule = true;
var PriorityQueue_1 = require("../PriorityQueue");
var assert_1 = require("assert");
var colors = require("colors");
var shadow = [];
var pq = new PriorityQueue_1["default"](function (a, b) { return a - b < 0; });
var LENGTH = 999;
for (var i = 0; i < LENGTH; i++) {
    var value = Math.ceil(Math.random() * 100);
    shadow.push(value);
    pq.push(value);
    assert_1.strict.equal(pq.getSize(), shadow.length);
    assert_1.strict.equal(pq.isEmpty(), false);
}
shadow.sort(function (a, b) { return b - a; });
for (var i = 0; i < LENGTH; i++) {
    var a = shadow.pop();
    assert_1.strict.equal(a, pq.peek());
    var b = pq.pop();
    assert_1.strict.equal(a, b);
    assert_1.strict.equal(pq.getSize(), shadow.length);
    assert_1.strict.equal(pq.isEmpty(), shadow.length === 0);
}
assert_1.strict.equal(pq.getSize(), 0);
assert_1.strict.equal(pq.isEmpty(), true);
console.log(colors.green('Passed!'));
//# sourceMappingURL=Test-PriorityQueue-2.js.map