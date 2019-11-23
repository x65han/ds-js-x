var Node = require("./node.js");

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        if (this.head == null) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            var temp = new Node(value);
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }
        this.size++;
        return true;
    }

    remove_head() {
        if (this.size == 0) { // empty list
            return false;
        } else if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        } else {
            this.clear();
        }
        return true;
    }

    remove_tail() {
        if (this.size == 0) {
            return false;
        } else if (this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
        } else {
            this.clear();
        }
        return true;
    }

    remove(value) {
        if (this.size == 0) { // empty list
            return false;
        } else if (this.head.value == value) { // remove head
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
                this.size--;
            } else {
                this.clear();
            }
            return true;
        } else if (this.tail.value == value) { // remove tail
            var temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return true;
        }
        // remove from middle
        var temp = this.head;
        while (temp) {
            if (temp.value == value) {
                temp.prev.next = temp.next;
                temp.next.prev = temp.prev;
                this.size--;
                return true;
            }
            temp = temp.next;
        }
        return false; // not found
    }

    has(value) {
        if (this.size) {
            var temp = this.head;
            while (temp) {
                if (temp.value == value) {
                    return true;
                }
                temp = temp.next;
            }
            return false;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        return true;
    }

    print() {
        var temp = this.head;
        var output = [];
        while (temp) {
            output.push(temp.value);
            temp = temp.next;
        }
        console.log(this.size, output);
        return output;
    }

    is_empty() {
        return (this.size == 0);
    }

    get_head() {
        if (this.is_empty()) {
            return false;
        } else {
            return this.head.value;
        }
    }

    get_tail() {
        if (this.is_empty()) {
            return false;
        } else {
            return this.tail.value;
        }
    }
}