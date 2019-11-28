import SegmentTree from '../SegmentTree';
import { strict as assert } from 'assert';

const tree = new SegmentTree();

tree.build([-1, 2, 4, 0]);
assert.equal(-1, tree.rangeMinQuery(0, 3));
assert.equal(0, tree.rangeMinQuery(1, 3));
tree.update(0, 3);
assert.equal(0, tree.rangeMinQuery(0, 3));
assert.equal(0, tree.rangeMinQuery(1, 3));
assert.equal(2, tree.rangeMinQuery(0, 2));

console.log('\x1b[32m%s\x1b[0m', 'Passed!');
