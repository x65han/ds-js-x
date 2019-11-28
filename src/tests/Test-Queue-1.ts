import Queue from '../Queue';
import { strict as assert } from 'assert';

const queue = new Queue();
const shadow = [];
for (let i = 0; i < 10; i++) {
	let value = Math.ceil(Math.random() * 100);
	shadow.push(value);
	queue.push(value);
	assert.equal(queue.getSize(), i + 1);
	assert.equal(queue.isEmpty(), false);
}

assert.deepEqual(queue.toArray(), shadow);

shadow.forEach(value => {
	assert.equal(value, queue.pop());
});

assert.equal(queue.getSize(), 0);
assert.equal(queue.isEmpty(), true);

console.log('\x1b[32m%s\x1b[0m', 'Passed!');
