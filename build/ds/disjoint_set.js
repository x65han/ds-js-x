"use strict";
exports.__esModule = true;
var Node = (function () {
    function Node(data, parent, rank) {
        if (parent === void 0) { parent = null; }
        if (rank === void 0) { rank = 0; }
        this.data = data;
        this.parent = parent;
        this.rank = rank;
    }
    return Node;
}());
var DisjointSet = (function () {
    function DisjointSet() {
        this.map = new Map();
    }
    return DisjointSet;
}());
exports["default"] = DisjointSet;
//# sourceMappingURL=disjoint_set.js.map