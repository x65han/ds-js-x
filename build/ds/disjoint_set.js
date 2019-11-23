"use strict";
exports.__esModule = true;
var Node = (function () {
    function Node(data, parent, rank) {
        if (parent === void 0) { parent = null; }
        if (rank === void 0) { rank = 0; }
        this.data = data;
        this.rank = rank;
        this.setParent(parent);
    }
    Node.prototype.setParent = function (parent) {
        if (parent === void 0) { parent = null; }
        if (parent === null) {
            this.parent = this;
        }
        else {
            this.parent = parent;
        }
    };
    return Node;
}());
var DisjointSet = (function () {
    function DisjointSet() {
        this.map = new Map();
    }
    DisjointSet.prototype.makeSet = function (data) {
        if (this.map.has(data)) {
            return;
        }
        var node = new Node(data);
        this.map.set(data, node);
    };
    DisjointSet.prototype.union = function (data1, data2) {
        if (this.map.has(data1) === false) {
            throw ('[DisjointSet][union] failed. data1 is not part of any set.');
        }
        else if (this.map.has(data2) === false) {
            throw ('[DisjointSet][union] failed. data2 is not part of any set.');
        }
        var node1 = this.map.get(data1);
        var node2 = this.map.get(data2);
        var parent1 = this.findSetByNode(node1);
        var parent2 = this.findSetByNode(node2);
        if (parent1.data === parent2.data) {
            return false;
        }
        var rank1 = parent1.rank;
        var rank2 = parent2.rank;
        if (rank1 >= rank2) {
            parent1.rank = (rank1 === rank2) ? rank1 + 1 : rank1;
            parent2.parent = parent1;
        }
        else {
            parent1.parent = parent2;
        }
        return true;
    };
    DisjointSet.prototype.findSet = function (data) {
        if (this.map.has(data) === false) {
            return null;
        }
        var node = this.map.get(data);
        var res = this.findSetByNode(node);
        return res.data;
    };
    DisjointSet.prototype.findSetByNode = function (node) {
        var parent = node.parent;
        if (parent == node) {
            return parent;
        }
        node.parent = this.findSetByNode(parent);
        return node.parent;
    };
    return DisjointSet;
}());
exports["default"] = DisjointSet;
//# sourceMappingURL=disjoint_set.js.map