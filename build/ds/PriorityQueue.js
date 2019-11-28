"use strict";
exports.__esModule = true;
var PriorityQueue = (function () {
    function PriorityQueue(comparatorFunction) {
        this.heap = [];
        this.compare = comparatorFunction;
    }
    PriorityQueue.prototype.toArray = function () {
        return this.heap;
    };
    PriorityQueue.prototype.clear = function () {
        this.heap = [];
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.getSize() === 0;
    };
    PriorityQueue.prototype.getSize = function () {
        return this.heap.length;
    };
    PriorityQueue.prototype.buildHeap = function () {
        var start = (this.getSize() - 1) >> 1;
        for (var i = start; i >= 0; i--) {
            this.heapify(i);
        }
    };
    PriorityQueue.prototype.push = function (value) {
        var i = this.getSize();
        this.heap.push(value);
        while (i > 0) {
            var parentIndex = (i - 1) >> 1;
            if (this.compare(value, this.heap[parentIndex])) {
                this.heap[i] = this.heap[parentIndex];
                i = parentIndex;
            }
            else {
                break;
            }
        }
        this.heap[i] = value;
    };
    PriorityQueue.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0];
    };
    PriorityQueue.prototype.pop = function () {
        if (this.isEmpty()) {
            return null;
        }
        var max = this.heap[0];
        if (this.getSize() === 1) {
            this.heap = [];
        }
        else {
            this.heap[0] = this.heap.pop();
            this.heapify(0);
        }
        return max;
    };
    PriorityQueue.prototype.heapify = function (index) {
        var leftIndex = 2 * index + 1;
        var rightIndex = leftIndex + 1;
        var largest = index;
        if (leftIndex < this.getSize() && this.compare(this.heap[leftIndex], this.heap[index])) {
            largest = leftIndex;
        }
        if (rightIndex < this.getSize() && this.compare(this.heap[rightIndex], this.heap[largest])) {
            largest = rightIndex;
        }
        if (largest !== index) {
            var temp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = temp;
            this.heapify(largest);
        }
    };
    return PriorityQueue;
}());
exports["default"] = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map