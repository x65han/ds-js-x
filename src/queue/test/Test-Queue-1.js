"use strict";
exports.__esModule = true;
var Queue_1 = require("../Queue");
var assert_1 = require("assert");
var colors = require("colors");
var queue = new Queue_1["default"]();
var shadow = [];
for (var i = 0; i < 10; i++) {
    var value = Math.ceil(Math.random() * 100);
    shadow.push(value);
    queue.push(value);
    assert_1.strict.equal(queue.getSize(), i + 1);
    assert_1.strict.equal(queue.isEmpty(), false);
}
assert_1.strict.deepEqual(queue.toArray(), shadow);
shadow.forEach(function (value) {
    assert_1.strict.equal(value, queue.pop());
});
assert_1.strict.equal(queue.getSize(), 0);
assert_1.strict.equal(queue.isEmpty(), true);
console.log(colors.green('Passed!'));
//# sourceMappingURL=Test-Queue-1.js.map