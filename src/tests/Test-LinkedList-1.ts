import LinkedList from '../LinkedList';
import { strict as assert } from 'assert';

const list = new LinkedList();
list.pushBack(1);
assert.deepEqual([1], list.toArray());
assert.equal(1, list.getSize());

list.pushFront(0);
assert.deepEqual([0, 1], list.toArray());
assert.equal(2, list.getSize());

list.removeHead();
assert.deepEqual([1], list.toArray());
assert.equal(1, list.getSize());

list.pushBack(2);
assert.deepEqual([1, 2], list.toArray());
assert.equal(2, list.getSize());

list.removeHead();
assert.deepEqual([2], list.toArray());
assert.equal(1, list.getSize());

console.log('\x1b[32m%s\x1b[0m', 'Passed!');
