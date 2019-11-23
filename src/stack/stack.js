var colors = require('colors');

module.exports = class Stack {
  constructor() {
    this.list = [];
  }

  help() {
    console.log(`\nDocumentation [Stack]:`.green);

    console.log(`Member Functions:`.red);
    console.log('print()'.green);
    console.log('\tPrints and returns the stack'.yellow);

    console.log('empty()'.green);
    console.log('\tReturns true if the stack is empty'.yellow);

    console.log('size()'.green);
    console.log('\tReturns the size of the stack'.yellow);

    console.log('clear()'.green);
    console.log('\tClears the stack'.yellow);

    console.log('push(val)'.green);
    console.log('\tPush the value on the stack'.yellow);

    console.log('peek()'.green);
    console.log('\tReturns the top of the stack'.yellow);

    console.log('pop()'.green);
    console.log('\tPops from the top of the stack'.yellow);

    console.log(`\n`);
  }

  size() {
    return this.list.length;
  }

  clear() {
    this.list = [];
    return true;
  }

  push(value) {
    this.list.push(value);
    return true;
  }

  peek() {
    if (this.list.length > 0) {
      let len = this.list.length;
      return this.list[len - 1];
    }
    return false;
  }

  pop() {
    if (this.list.length > 0) {
      this.list.pop();
      return true;
    }
    return false;
  }

  print() {
    console.log(this.list);
    return this.list;
  }

  empty() {
    if (this.list.length == 0) {
      return true;
    }
    return false;
  }
}
