import PriorityQueue from '../PriorityQueue';
import { strict as assert } from 'assert';

const shadow = [];
const pq = new PriorityQueue((a, b) => a - b < 0);

const LENGTH = 999;
for (let i = 0; i < LENGTH; i++) {
	let value = Math.ceil(Math.random() * 100);
	shadow.push(value);
	pq.push(value);
	assert.equal(pq.getSize(), shadow.length);
	assert.equal(pq.isEmpty(), false);
}

shadow.sort((a, b) => b - a);

for (let i = 0; i < LENGTH; i++) {
	const a = shadow.pop();
	assert.equal(a, pq.peek());
	const b = pq.pop();
	assert.equal(a, b);
	assert.equal(pq.getSize(), shadow.length);
	assert.equal(pq.isEmpty(), shadow.length === 0);
}

assert.equal(pq.getSize(), 0);
assert.equal(pq.isEmpty(), true);

console.log('\x1b[32m%s\x1b[0m', 'Passed!');
