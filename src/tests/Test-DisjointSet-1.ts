import DisjointSet from '../DisjointSet';
import { strict as assert } from 'assert';

const ds = new DisjointSet();

for (let i = 1; i <= 7; i++) {
	ds.makeSet(i);
}

ds.union(1, 2);
ds.union(2, 3);
ds.union(4, 5);
ds.union(6, 7);
ds.union(5, 6);
ds.union(3, 7);

for (let i = 1; i <= 7; i++) {
	const res = ds.findSet(i);
	assert.equal(res, 4);
}

console.log('\x1b[32m%s\x1b[0m', 'Passed!');
