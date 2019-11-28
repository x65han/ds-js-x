class SegmentTree {
	private tree: Array<number> = [];
	private queryFromIndex: number = 0;
	private queryToIndex: number = 0;
	private size: number = 0;

	public build(input: Array<number>): void {
		this.size = input.length;
		this.buildImpl(input, 0, this.size - 1, 0);
	}

	private buildImpl(input: Array<number>, low: number, high: number, position: number): void {
		if (low === high) {
			this.tree[position] = input[low];
			return;
		}

		const mid = (low + high) >> 1;
		const leftChild = 2 * position + 1;
		const rightChild = leftChild + 1;

		this.buildImpl(input, low, mid, leftChild);
		this.buildImpl(input, mid + 1, high, rightChild);
		this.tree[position] = Math.min(this.tree[leftChild], this.tree[rightChild]);
	}

	public update(index: number, value: number): boolean {
		if (index >= 0 && index < this.size) {
			this.updateImpl(index, value, 0, this.size - 1, 0);
			return true;
		}

		return false;
	}

	private updateImpl(index: number, value: number, low: number, high: number, position: number) {
		if (position >= this.size) {
			return;
		}

		if (low === high) {
			this.tree[position] = value;
			return;
		}

		const mid = (low + high) >> 1;
		const leftChild = 2 * position + 1;
		const rightChild = leftChild + 1;

		this.updateImpl(index, value, low, mid, leftChild);
		this.updateImpl(index, value, mid + 1, high, rightChild);
		this.tree[position] = Math.min(this.tree[leftChild], this.tree[rightChild]);
	}

	public rangeMinQuery(queryFromIndex: number, queryToIndex: number): number {
		this.queryFromIndex = queryFromIndex;
		this.queryToIndex = queryToIndex;
		const res = this.rangeMinQueryImpl(0, this.size - 1, 0);
		return res;
	}

	private rangeMinQueryImpl(low: number, high: number, position: number): number {
		if (this.queryFromIndex <= low && this.queryToIndex >= high) {
			// total overlap
			return this.tree[position];
		} else if (this.queryFromIndex > high || this.queryToIndex < low) {
			// no overlap
			return Infinity;
		}

		const mid = (low + high) >> 1;
		return Math.min(
			this.rangeMinQueryImpl(low, mid, 2 * position + 1),
			this.rangeMinQueryImpl(mid + 1, high, 2 * position + 2)
		);
	}
}

export default SegmentTree;
