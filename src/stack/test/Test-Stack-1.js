"use strict";
exports.__esModule = true;
var Stack_1 = require("../Stack");
var assert_1 = require("assert");
var colors = require("colors");
var stack = new Stack_1["default"]();
var shadow = [];
for (var i = 0; i < 10; i++) {
    var value = Math.ceil(Math.random() * 100);
    shadow.push(value);
    stack.push(value);
    assert_1.strict.equal(stack.getSize(), i + 1);
    assert_1.strict.equal(stack.isEmpty(), false);
}
assert_1.strict.deepEqual(stack.toArray(), shadow);
shadow.reverse().forEach(function (value) {
    assert_1.strict.equal(value, stack.pop());
});
assert_1.strict.equal(stack.getSize(), 0);
assert_1.strict.equal(stack.isEmpty(), true);
console.log(colors.green('Passed!'));
//# sourceMappingURL=Test-Stack-1.js.map