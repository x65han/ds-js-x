import Stack from '../Stack';
import { strict as assert } from 'assert';

const stack = new Stack();
const shadow = [];
for (let i = 0; i < 10; i++) {
	let value = Math.ceil(Math.random() * 100);
	shadow.push(value);
	stack.push(value);
	assert.equal(stack.getSize(), i + 1);
	assert.equal(stack.isEmpty(), false);
}

assert.deepEqual(stack.toArray(), shadow);

shadow.reverse().forEach(value => {
	assert.equal(value, stack.pop());
});

assert.equal(stack.getSize(), 0);
assert.equal(stack.isEmpty(), true);

console.log('\x1b[32m%s\x1b[0m', 'Passed!');
