import BinarySearchTree from '../BinarySearchTree'
import { strict as assert, throws } from 'assert';
import * as colors from 'colors'

const tree = new BinarySearchTree();
const LENGTH = 999

for (let i = 0; i < LENGTH; i++) {
    const value = Math.random() * 1000 >> 1
    tree.add(value)
}

const vals = tree.inOrderTraversal()
for (let i = 1; i < vals.length; i++) {
    const pre = vals[i - 1]
    const now = vals[i]

    if (pre > now) {
        throw ('In Order Traversal should be non-decreasing.')
    }
}

for (const val of vals) {
    assert.equal(true, tree.has(val))
}

const randomValues = new Array<number>()

for (let i = 0; i < LENGTH >> 1; i++) {
    const index = Math.random() * LENGTH
    const value = vals[index]
    if (randomValues.includes(value) === false) {
        randomValues.push(value)
    }
}

for (const val of randomValues) {
    tree.remove(val)
    assert.equal(false, tree.has(val))
}

console.log(colors.green('Passed!'))
