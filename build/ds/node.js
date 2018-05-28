module.exports = class Node {
    constructor(value = 0) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}