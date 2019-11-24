"use strict";
exports.__esModule = true;
var BinarySearchTreeNode = (function () {
    function BinarySearchTreeNode(value) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }
    return BinarySearchTreeNode;
}());
var BinarySearchTree = (function () {
    function BinarySearchTree() {
        this.root = null;
        this.size = 0;
    }
    BinarySearchTree.prototype.getSize = function () {
        return this.size;
    };
    BinarySearchTree.prototype.inOrderTraversal = function () {
        var res = new Array();
        if (this.root) {
            this.inOrderTraversalImpl(this.root, res);
        }
        return res;
    };
    BinarySearchTree.prototype.inOrderTraversalImpl = function (node, res) {
        node.left && this.inOrderTraversalImpl(node.left, res);
        res.push(node.value);
        node.right && this.inOrderTraversalImpl(node.right, res);
    };
    BinarySearchTree.prototype.add = function (value) {
        this.size++;
        if (!this.root) {
            this.root = new BinarySearchTreeNode(value);
        }
        var node = this.root;
        while (node) {
            if (value < node.value) {
                if (node.left) {
                    node = node.left;
                }
                else {
                    node.left = new BinarySearchTreeNode(value);
                    node.left.parent = node;
                    break;
                }
            }
            else {
                if (node.right) {
                    node = node.right;
                }
                else {
                    node.right = new BinarySearchTreeNode(value);
                    node.right.parent = node;
                    break;
                }
            }
        }
    };
    BinarySearchTree.prototype.remove = function (value) {
        if (this.getSize() === 0) {
            return false;
        }
        return this.removeImpl(this.root, value);
    };
    BinarySearchTree.prototype.removeImpl = function (startBinarySearchTreeNode, value) {
        if (!startBinarySearchTreeNode) {
            return false;
        }
        var node = startBinarySearchTreeNode;
        if (value < node.value) {
            if (node.left) {
                this.removeImpl(node.left, value);
            }
            else {
                return false;
            }
        }
        else if (value > node.value) {
            if (node.right) {
                this.removeImpl(node.right, value);
            }
            else {
                return false;
            }
        }
        else {
            if (!node.left || !node.right) {
                node = (node.left) ? node.left : node.right;
            }
            else {
                var run = node.right;
                while (run.left) {
                    run = run.left;
                }
                node.value = run.value;
                this.removeImpl(node.right, run.value);
            }
            return true;
        }
        return false;
    };
    BinarySearchTree.prototype.has = function (value) {
        var node = this.root;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = value < node.value ? node.left : node.right;
        }
        return false;
    };
    return BinarySearchTree;
}());
exports["default"] = BinarySearchTree;
//# sourceMappingURL=BinarySearchTree.js.map