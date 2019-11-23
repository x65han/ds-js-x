import * as _ from 'colors'

class Node {
    data: number;
    parent: Node;
    rank: number;

    constructor(data:number, parent:Node=null, rank:number = 0) {
        this.data = data;
        this.parent = parent;
        this.rank = rank;
    }
}

class DisjointSet {
    map: Map<number, Node> = new Map();
}

export default DisjointSet
