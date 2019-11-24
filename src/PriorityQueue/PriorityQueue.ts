class PriorityQueue {
    private compare: (a: any, b: any) => boolean
    private heap: Array<any>;

    constructor(comparatorFunction: (a: any, b: any) => boolean) {
        this.heap = []
        this.compare = comparatorFunction
    }

    public toArray(): Array<any> {
        return this.heap
    }

    public clear(): void {
        this.heap = []
    }

    public isEmpty(): boolean {
        return this.getSize() === 0
    }

    public getSize(): number {
        return this.heap.length
    }

    public buildHeap(): void {
        const start = (this.getSize() - 1) >> 1

        for (let i = start; i >= 0; i--) {
            this.heapify(i)
        }
    }

    public push(value: any): void {
        let i = this.getSize()
        this.heap.push(value)

        while (i > 0) {
            let parentIndex = (i - 1) >> 1
            if (this.compare(value, this.heap[parentIndex])) {
                this.heap[i] = this.heap[parentIndex]
                i = parentIndex
            } else {
                break
            }
        }

        this.heap[i] = value
    }

    public peek(): any | null {
        if (this.isEmpty()) {
            return null
        }

        return this.heap[0]
    }

    public pop(): any | null {
        if (this.isEmpty()) {
            return null
        }

        const max = this.heap[0]
        if (this.getSize() === 1) {
            this.heap = []
        } else {
            this.heap[0] = this.heap.pop()
            this.heapify(0)
        }

        return max
    }

    private heapify(index: number): void {
        const leftIndex = 2 * index + 1
        const rightIndex = leftIndex + 1

        let largest = index

        if (
            leftIndex < this.getSize() &&
            this.compare(this.heap[leftIndex], this.heap[index])
        ) {
            largest = leftIndex
        }

        if (
            rightIndex < this.getSize() &&
            this.compare(this.heap[rightIndex], this.heap[largest])
        ) {
            largest = rightIndex
        }

        if (largest !== index) {
            const temp = this.heap[largest]
            this.heap[largest] = this.heap[index]
            this.heap[index] = temp
            this.heapify(largest)
        }
    }
}

export default PriorityQueue
