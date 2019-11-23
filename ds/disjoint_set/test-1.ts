import DisjointSet from './disjoint_set'

const ds = new DisjointSet();

// 1 -> 7
for (let i = 0; i < 7; i++) {
    ds.makeSet(i + 1)
}

ds.union(1, 2)
ds.union(2, 3)
ds.union(4, 5)
ds.union(6, 7)
ds.union(5, 6)
ds.union(3, 7)

// 1 -> 7
for (let i = 0; i < 7; i++) {
    const res = ds.findSet(i + 1)
    console.log(res)
}
