const Node = require("./node.js");
require('colors');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    help() {
        console.log(`\nDocumentation [Linked List]:`.green);
        console.log(`Member Variables:`.red);
        console.log(`size: `.green);
        console.log(`\treturns the size of linked list`.yellow);
        console.log(`head: `.green);
        console.log(`\treturns the head of linked list`.yellow);
        console.log(`tail: `.green);
        console.log(`\treturns the tail of linked list`.yellow);
        console.log('\n');

        console.log(`Member Functions:`.red);
        console.log('print()'.green);
        console.log('\tPrints the linked list forward and backward'.yellow);

        console.log('print_back(value)'.green);
        console.log('\tTakes a value and pushes it to the end of linked list'.yellow);
        console.log('\tReturns the new Node'.yellow);

        console.log('print_back_all(array)'.green);
        console.log('\tTakes an array of values and pushes each to the end of linked list'.yellow);
        console.log('\tReturns an array of node on success and false on failure'.yellow);

        console.log('print_front(value)'.green);
        console.log('\tTakes a value and pushes it to the front of linked list'.yellow);
        console.log('\tReturns the new Node'.yellow);
        
        console.log('remove_head() '.green);
        console.log('\tRemoves the head of linked list'.yellow);

        console.log('remove_tail()'.green);
        console.log('\tRemoves the tail of linked list'.yellow);

        console.log('remove(value)'.green);
        console.log('\tRemoves the Node with the input value'.yellow);
        console.log('\tReturns true on sucess and false on failure'.yellow);

        console.log('remove_node(node)'.green);
        console.log('\tTakes a Node and removes it'.yellow);
        console.log('\tReturns true on sucess and false on failure'.yellow);

        console.log(`\n`);
    }

    print() {
        if (this.head) {
            let temp = this.head;
            let arr = [];
            while (temp) {
                arr.push(`(${temp.value}) -> `);
                temp = temp.next;
            }
            console.log(arr.join(''), ' | size', this.size);
        } else { // empty list
            console.log(`list is empty!!`);
        }
        this.print_back();
    }

    print_back() {
        if (this.tail) {
            let temp = this.tail;
            let arr = [];
            while (temp) {
                arr.push(`(${temp.value}) -> `);
                temp = temp.prev;
            }
            arr = arr.reverse();
            console.log(arr.join(''), ' | size', this.size);
        } else { // empty list
            console.log(`list is empty!!`);
        }
    }

    push_back_all(arr) {
        let res = [];
        if (Array.isArray(arr) && arr.length > 0) {
            for (let val of arr) {
                // handles size++
                let node = this.push_back(val);
                res.push(node);
            }
            return res;
        }
        return false;
    }

    push_back(value) { // pushes to the end of the list
        if (this.head == null) { // list is empty
            this.head = this.tail = new Node(value);
        } else {
            // list has at least 1 element
            let old_tail = this.tail;
            this.tail = new Node(value);
            // connect
            old_tail.next = this.tail;
            this.tail.prev = old_tail;
        }

        this.size++;
        return this.tail;
    }

    push_front(value) {
        if (this.head == null) {
            // handles size++
            return this.push_back(value);
        } else {
            this.size++;
            let old_head = this.head;
            this.head = new Node(value);
            this.head.next = old_head;
            old_head.prev = this.head;
            return this.head;
        }
    }

    removeHead() {
        if (this.head) {
            let old_head = this.head;
            this.head = this.head.next;
            this.size--;
            if (this.head) {
                this.head.prev = null;
            } else { // empty list
                this.tail = this.head = null;
            }
            return old_head;
        }
    }

    removeTail() {
        if (this.tail) {
            let old_tail = this.tail;
            this.tail = this.tail.prev;
            this.size--;
            if (this.tail) {
                this.tail.next = null;
            } else { // empty list
                this.tail = this.head = null;
            }
            return old_tail;
        }
    }

    remove(val) {
        let temp = this.head;
        while (temp) {
            if (temp.value == val) {
                // handles size--                
                this.remove_node(temp);
                return true;
            }
        }
        return false;
    }

    remove_node(node) { // remove a node from linked list
        if (node && this.head) {
            if (!node || this.head == null) return; // throw an error
            if (node == this.head) {
                this.removeHead();
            } else if (node == this.tail) {
                this.removeTail();
            } else { // a -> b -> c // remove b
                let prev = node.prev;
                let next = node.next;
                prev.next = next;
                next.prev = prev;
                this.size--;
            }
            return true;
        }
        return false;
    }
}
