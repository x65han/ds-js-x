class DisjointSetNode {
	data: number;
	parent: DisjointSetNode;
	rank: number;

	constructor(data: number, parent: DisjointSetNode | null = null, rank: number = 0) {
		this.data = data;
		this.rank = rank;
		this.setParent(parent);
	}

	public setParent(parent: DisjointSetNode | null = null): void {
		// default parent to self
		if (parent === null) {
			this.parent = this;
		} else {
			this.parent = parent;
		}
	}
}

class DisjointSet {
	private map: Map<number, DisjointSetNode> = new Map();

	// Create a set with only one element
	public makeSet(data: number): void {
		// data already exists in set
		if (this.map.has(data)) {
			return;
		}

		const node: DisjointSetNode = new DisjointSetNode(data);
		this.map.set(data, node);
	}

	public union(data1: number, data2: number): boolean {
		if (this.map.has(data1) === false) {
			throw '[DisjointSet][union] failed. data1 is not part of any set.';
		} else if (this.map.has(data2) === false) {
			throw '[DisjointSet][union] failed. data2 is not part of any set.';
		}

		const node1 = this.map.get(data1)!;
		const node2 = this.map.get(data2)!;

		const parent1 = this.findSetByDisjointSetNode(node1);
		const parent2 = this.findSetByDisjointSetNode(node2);

		// If they are part of the same set, do nothing
		if (parent1.data === parent2.data) {
			return false;
		}

		const rank1 = parent1.rank;
		const rank2 = parent2.rank;
		// else whoever's rank is higher becomes parent of the other
		if (rank1 >= rank2) {
			// increment only if both sets have the same rank
			parent1.rank = rank1 === rank2 ? rank1 + 1 : rank1;
			parent2.parent = parent1;
		} else {
			parent1.parent = parent2;
		}

		return true;
	}

	public findSet(data: number): number | null {
		if (this.map.has(data) === false) {
			return null;
		}

		const node = this.map.get(data)!;

		const res = this.findSetByDisjointSetNode(node);
		return res.data;
	}

	private findSetByDisjointSetNode(node: DisjointSetNode): DisjointSetNode {
		const parent = node.parent;
		if (parent == node) {
			return parent;
		}
		// path compression
		node.parent = this.findSetByDisjointSetNode(parent);
		return node.parent;
	}
}

export default DisjointSet;
