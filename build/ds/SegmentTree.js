"use strict";
exports.__esModule = true;
var SegmentTree = (function () {
    function SegmentTree() {
        this.tree = [];
        this.queryFromIndex = 0;
        this.queryToIndex = 0;
        this.size = 0;
    }
    SegmentTree.prototype.build = function (input) {
        this.size = input.length;
        this.buildImpl(input, 0, this.size - 1, 0);
    };
    SegmentTree.prototype.buildImpl = function (input, low, high, position) {
        if (low === high) {
            this.tree[position] = input[low];
            return;
        }
        var mid = (low + high) >> 1;
        var leftChild = 2 * position + 1;
        var rightChild = leftChild + 1;
        this.buildImpl(input, low, mid, leftChild);
        this.buildImpl(input, mid + 1, high, rightChild);
        this.tree[position] = Math.min(this.tree[leftChild], this.tree[rightChild]);
    };
    SegmentTree.prototype.update = function (index, value) {
        if (index >= 0 && index < this.size) {
            this.updateImpl(index, value, 0, this.size - 1, 0);
            return true;
        }
        return false;
    };
    SegmentTree.prototype.updateImpl = function (index, value, low, high, position) {
        if (position >= this.size) {
            return;
        }
        if (low === high) {
            this.tree[position] = value;
            return;
        }
        var mid = (low + high) >> 1;
        var leftChild = 2 * position + 1;
        var rightChild = leftChild + 1;
        this.updateImpl(index, value, low, mid, leftChild);
        this.updateImpl(index, value, mid + 1, high, rightChild);
        this.tree[position] = Math.min(this.tree[leftChild], this.tree[rightChild]);
    };
    SegmentTree.prototype.rangeMinQuery = function (queryFromIndex, queryToIndex) {
        this.queryFromIndex = queryFromIndex;
        this.queryToIndex = queryToIndex;
        var res = this.rangeMinQueryImpl(0, this.size - 1, 0);
        return res;
    };
    SegmentTree.prototype.rangeMinQueryImpl = function (low, high, position) {
        if (this.queryFromIndex <= low && this.queryToIndex >= high) {
            return this.tree[position];
        }
        else if (this.queryFromIndex > high || this.queryToIndex < low) {
            return Infinity;
        }
        var mid = (low + high) >> 1;
        return Math.min(this.rangeMinQueryImpl(low, mid, 2 * position + 1), this.rangeMinQueryImpl(mid + 1, high, 2 * position + 2));
    };
    return SegmentTree;
}());
exports["default"] = SegmentTree;
//# sourceMappingURL=SegmentTree.js.map