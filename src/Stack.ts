class Stack {
    private list: Array<number> = [];

    constructor(inputArray?: Array<number>) {
        if (inputArray) {
            this.list = inputArray.slice()
        }
    }

    public toArray(): Array<number> {
        return this.list.slice()
    }

    public isEmpty(): boolean {
        return this.getSize() === 0
    }

    public getSize(): number {
        return this.list.length
    }

    public clear(): void {
        this.list = []
    }

    public push(value: number): void {
        this.list.push(value)
    }

    public peek(): number | null {
        if (this.isEmpty()) {
            return null
        }

        const length = this.getSize();
        return this.list[length - 1]
    }

    public pop(): number | null {
        if (this.isEmpty()) {
            return null
        }

        return this.list.pop()!
    }
}

export default Stack
