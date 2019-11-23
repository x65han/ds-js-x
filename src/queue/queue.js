module.exports = class Queue {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    help() {
        console.log(`\nDocumentation [Queue]:`.green);

        console.log(`Member Functions:`.red);
        console.log('print()'.green);
        console.log('\tPrints and returns the queue'.yellow);

        console.log('empty()'.green);
        console.log('\tReturns true if the queue is empty'.yellow);

        console.log('size()'.green);
        console.log('\tReturns the size of the queue'.yellow);

        console.log('clear()'.green);
        console.log('\tClears the queue'.yellow);

        console.log('push(val)'.green);
        console.log('\tPush the value to the back of the queue'.yellow);

        console.log('peek()'.green);
        console.log('\tReturns the head of the queue'.yellow);

        console.log('pop()'.green);
        console.log('\tPops from the head of the queue'.yellow);

        console.log(`\n`);
    }

    clear() {
        this.list = [];
        return true;
    }

    push(value) {
        this.list.push(value);
        return true;
    }

    pop() {
        if (this.list.length > 0) {
            return this.list.shift(); // remove head
        }
        return false;
    }

    peek() {
        if (this.list.length > 0) {
            return this.list[0];
        }
        return false;
    }

    print() {
        console.log(this.list);
        return this.list;
    }

    empty() {
        return (this.list.length == 0);
    }
}