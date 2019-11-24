"use strict";
exports.__esModule = true;
var Queue = (function () {
    function Queue(inputArray) {
        this.list = [];
        if (inputArray) {
            this.list = inputArray.slice();
        }
    }
    Queue.prototype.toArray = function () {
        return this.list.slice();
    };
    Queue.prototype.isEmpty = function () {
        return this.getSize() === 0;
    };
    Queue.prototype.getSize = function () {
        return this.list.length;
    };
    Queue.prototype.clear = function () {
        this.list = [];
    };
    Queue.prototype.push = function (value) {
        this.list.push(value);
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.list[0];
    };
    Queue.prototype.pop = function () {
        if (this.isEmpty()) {
            return null;
        }
        var res = this.list[0];
        this.list.shift();
        return res;
    };
    return Queue;
}());
exports["default"] = Queue;
//# sourceMappingURL=Queue.js.map