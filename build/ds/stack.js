"use strict";
exports.__esModule = true;
var Stack = (function () {
    function Stack(inputArray) {
        this.list = [];
        if (inputArray) {
            this.list = inputArray.slice();
        }
    }
    Stack.prototype.toArray = function () {
        return this.list.slice();
    };
    Stack.prototype.isEmpty = function () {
        return this.getSize() === 0;
    };
    Stack.prototype.getSize = function () {
        return this.list.length;
    };
    Stack.prototype.clear = function () {
        this.list = [];
    };
    Stack.prototype.push = function (value) {
        this.list.push(value);
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        var length = this.getSize();
        return this.list[length - 1];
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.list.pop();
    };
    return Stack;
}());
exports["default"] = Stack;
//# sourceMappingURL=Stack.js.map