var colors = require('colors');
var Node = require("./bst_node.js");

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
        this._queue = [];
    }

    help() {
        console.log('\nDocumentation [Binary Search Tree]:'.green);
        console.log('Member Variables:'.red);
        console.log('size: '.green);
        console.log('\treturns the size of binary search tree'.yellow);
        console.log('root: '.green);

        console.log('Member Functions:'.red);
        console.log('in_order_traversal()'.green);
        console.log('\tReturns an array after performing in order traversal'.yellow);

        console.log('breath_first_traversal()'.green);
        console.log('\tReturns an array after performing breath first traversal'.yellow);

        console.log('add(value)'.green);
        console.log('\tReturns true on success and false on failure'.yellow);

        console.log('has(value)'.green);
        console.log('\tReturns true if value exists, otherwise false'.yellow);

        console.log('remove(value)'.green);
        console.log("\tReturns true on success and false when value does't exist".yellow);

        console.log('max_depth()'.green);
        console.log("\tReturns the max depth of the binary search tree".yellow);

        console.log('hologram()'.green);
        console.log("\tBeta: prints a hologram of the binary search tree".yellow);

        console.log(`\n`);
    }

    in_order_traversal() { // in order traversal
        let output = [];

        var _in_order_traversal = node => {
            if (node) {
                _in_order_traversal(node.left);
                this._output.push(node.value);
                _in_order_traversal(node.right);
            }
        }

        return output;
    }

    breath_first_traversal() { // breadth width traversal
        let queue = [];
        let output = [];
        var node = this.root;

        this.queue.push(node);
        while (this.queue.length) {
            var temp_node = this.queue.shift(); // pop head
            output.push(temp_node.value)

            if (temp_node.left) {
                this.queue.push(temp_node.left)
            }

            if (temp_node.right) {
                this.queue.push(temp_node.right)
            }
        }
        return output;
    }

    add(value) {
        var node = false;
        if (this.root) {
            node = this.root;
        } else { // first node
            this.root = new Node(value);
        }
        while (node) {
            if (value < node.value) {
                if (node.left) {
                    node = node.left;
                } else {
                    node.left = new Node(value);
                    node.left.parent = node;
                    break;
                }
            } else {
                if (node.right) {
                    node = node.right;
                } else {
                    node.right = new Node(value);
                    node.right.parent = node;
                    break;
                }
            }
        }
        this.size++;
        return true;
    }

    has(value) {
        var node = this.root;
        while (node) {
            if (node.value == value) {
                return true;
            }
            if (value < node.value) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return false;
    }

    remove(value) {
        return this._remove(this.root, value);
    }

    _remove(node, value) {
        if (node) {
            if (value < node.value) {
                if (node.left) {
                    this._remove(node.left, value);
                } else {
                    return false;
                }
            } else if (value > node.value) {
                if (node.right) {
                    this._remove(node.right, value);
                } else {
                    return false;
                }
            } else {
                if (!node.left || !node.right) {
                    node = (!node.left) ? node.right : node.left;
                } else {
                    var run = node.right;
                    while (run.left) run = run.left;
                    node.value = run.value;
                    this._remove(node.right, run.value);
                }
                return true;
            }
        }
        return false;
    }

    max_depth() {
        return this._max_depth(this.root);
    }

    _max_depth(node) {
        if (node) {
            /* compute the depth of each subtree */
            var lDepth = this._max_depth(node.left);
            var rDepth = this._max_depth(node.right);

            /* use the larger one */
            return (lDepth > rDepth) ? lDepth + 1 : rDepth + 1;
        } else {
            return 0;
        }
    }

    hologram() {
        this._hologram([this.root], 1, this.max_depth());
    }

    _hologram(nodes, level, max_level) {
        // validation
        if (nodes.length == 0) return;
        if (max_level < level) return;

        // configuration
        var space = (count) => {
            var t = "";
            for (var xyz = 0; xyz < count; xyz++) {
                string += " ";
                t += " ";
            }
            return t;
        };
        var dash = (count) => {
            var t = "";
            for (var xyz = 0; xyz < count; xyz++) {
                string += "-";
                t += "-";
            }
            return t;
        };
        var remove = (count) => {
            if (string.length > count) {
                string = string.substr(0, string.length - count);
            }
        };
        var scale = 1;
        var indentation = space(Math.pow(2, max_level));

        // calculate variable
        var floor = max_level - level;
        var endge_lines = Math.pow(2, (Math.max(floor - 1, 0)));
        var first_spaces = Math.pow(2, (floor)) - 1;
        var between_spaces = Math.pow(2, (floor + 1)) - 1;

        // apply configuration
        endge_lines *= scale
        first_spaces *= scale;
        between_spaces *= scale;

        // print nodes
        var string = indentation;
        space(first_spaces);

        var new_nodes = [];
        nodes.forEach((ele, i) => {
            if (ele) {
                // first node has no parent || all left node
                if (!ele.parent || ele.parent.left == ele) {
                    var rescue = ele.value.toString().length;
                    var rescue = Math.floor(rescue / 2);
                    remove(rescue);
                    string += ele.value;
                    space(rescue);
                } else if (!ele.parent || ele.parent.right == ele) {
                    var rescue = ele.value.toString().length - 1;
                    var rescue = Math.floor(rescue / 2);
                    space(rescue);
                    string += ele.value;
                    remove(rescue);
                }
                new_nodes.push(ele.left);
                new_nodes.push(ele.right);
            } else {
                new_nodes.push(false);
                new_nodes.push(false);
                space(scale);
            }
            space(between_spaces);
        });
        console.log(string);

        // print connections
        for (var i = 1; i <= endge_lines; i++) {
            string = indentation;
            for (var j = 0; j < nodes.length; j++) {
                space(first_spaces - i);

                if (nodes[j]) {
                    if (nodes[j].left) string += "/"
                    else space(scale);

                    space(i + i - scale);

                    if (nodes[j].right) string += "\\";
                    else space(scale);

                    space(endge_lines * 2 - i);
                } else {
                    space(endge_lines * 2 + i + scale);
                }
            }
            console.log(string);
        }
        // recursion -> next level
        this._hologram(new_nodes, level + 1, max_level);
    }
}
