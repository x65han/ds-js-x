var colors = require('colors');

module.exports = class PriorityQueue {
  constructor(comparator = null) {
    this.size = 0;
    this.heap = [];

    if (comparator) {
      this.comparator = comparator;
    } else {
      // Default: max heap
      this.comparator = (a, b) => a - b > 0; // a > b
    }

    /*
    1. this.comparator = (a, b) => a - b > 0; // max heap
    2. this.comparator = (a, b) => a - b < 0; // min heap
    3. this.comparator = (a, b) => a[0] - b[0] < 0; // min heap with extra data: 
    tips: 
    - pass extra data after first element
    - first element will be used to determine priority
    */
  }

  help() {
    console.log(`\nDocumentation [Priority Queue]:`.green);

    console.log(`Constructor:`.red);
    console.log('\tmax heap: this.comparator = (a, b) => a - b > 0'.yellow);
    console.log('\tmin heap: this.comparator = (a, b) => a - b < 0'.yellow);
    console.log('\tmin heap with extra data: this.comparator = (a, b) => a[0] - b[0] < 0'.yellow);
    console.log('tips: '.red);
    console.log('\t- pass extra data after first element'.yellow);
    console.log('\t- first element will be used to determine priority'.yellow);
    
    console.log(`Member Variables:`.red);
    console.log('size'.green);
    console.log('\tReturns the size of the priotity queue'.yellow);
    
    console.log(`Member Functions:`.red);
    console.log('print()'.green);
    console.log('\tPrints and returns the queue'.yellow);
    
    console.log('To be continued'.red);

    console.log(`\n`);
  }

  heapify(index) {
    let left_index = 2 * index + 1;
    let right_index = left_index + 1;

    let largest = index;

    if (
      left_index < this.size &&
      this.comparator(this.heap[left_index], this.heap[index])
    ) {
      // if (left_index <= this.size && this.heap[left_index] > this.heap[index]) {
      largest = left_index;
    }

    if (
      right_index < this.size &&
      this.comparator(this.heap[right_index], this.heap[largest])
      //   this.heap[right_index] > this.heap[largest]
    ) {
      largest = right_index;
    }

    if (largest != index) {
      // array swap
      let temp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = temp;
      this.heapify(largest);
    }
  }

  build_heap() {
    let start_from = Math.floor((this.size - 1) / 2);
    for (let i = start_from; i >= 0; i--) {
      this.heapify(i);
    }
  }

  push(value) {
    let i = this.size;

    // (this.size - 1) / 2 => parent_index
    while (i > 0) {
      let parent_index = Math.floor((i - 1) / 2);

      if (this.comparator(value, this.heap[parent_index])) {
        // if (this.heap[parent_index] < value) {
        this.heap[i] = this.heap[parent_index];
        i = parent_index;
      } else {
        break;
      }
    }

    this.heap[i] = value;
    this.size++;
  }

  pop() {
    if (this.size == 0) {
      return null;
    }

    let max = this.heap[0];
    if (this.size == 1) {
      this.size = 0;
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      this.size--;
      this.heapify(0);
    }

    return max;
  }

  peek() {
    return this.heap[0];
  }

  print() {
    console.log(this.size, this.heap);
  }

  assign(arr) {
    this.heap = arr;
    this.size = arr.length;
    this.build_heap();
  }
}
