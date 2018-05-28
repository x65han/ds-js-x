module.exports = class Node {
    constructor(value = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}