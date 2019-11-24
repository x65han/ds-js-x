class Node {
    value: number;
    prev: Node | null = null;
    next: Node | null = null;

    constructor(value: number = 0) {
        this.value = value;
    }
}

class LinkedList {
    size: number = 0
    head: Node | null = null;
    tail: Node | null = null;

    constructor(inputArray?: Array<number>) {
        if (inputArray) {
            for (const value of inputArray) {
                this.pushBack(value)
            }
        }
    }

    public toArray(): Array<number> {
        const res = []
        let temp = this.head
        while (temp) {
            res.push(temp.value)
            temp = temp.next
        }

        return res
    }

    public getSize(): number {
        return this.size
    }

    public pushBack(value: number): void {
        if (this.size === 0) { // empty list
            this.head = new Node(value)
            this.tail = this.head
        } else { // list has at least 1 element
            let oldTail = this.tail!;
            this.tail = new Node(value)
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }

        this.size++;
    }

    public pushFront(value: number): void {
        if (this.size === 0) {
            this.pushBack(value)
        } else {
            this.size++
            let oldHead = this.head!
            this.head = new Node(value)
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    }

    public removeHead(): void {
        if (this.size === 0) {
            throw ('[Failed to remove head] LinkedList is empty')
        }

        this.removeNode(this.head!)
    }

    public removeTail(): void {
        if (this.size === 0) {
            throw ('[Failed to remove tail] LinkedList is empty')
        }

        this.removeNode(this.tail!)
    }

    public remove(value: number): boolean {
        let temp = this.head
        while (temp) {
            if (temp.value === value) {
                this.removeNode(temp)
                return true
            }
            temp = temp.next
        }

        return false
    }

    private removeNode(node: Node): void {
        if (node == this.head) {
            let oldHead = this.head
            let newHead = this.head.next
            if (newHead) {
                newHead.prev = null
            } else {
                this.tail = this.head = null
            }
            this.head = newHead

            this.cutNodeConnection(oldHead)
        } else if (node == this.tail) {
            let oldTail = this.tail;
            let newTail = this.tail.prev
            if (newTail) {
                newTail.next = null
            } else {
                this.tail = this.head = null
            }

            this.cutNodeConnection(oldTail)
        } else {
            const prev = node.prev!
            const next = node.next!
            prev.next = next
            next.prev = prev

            this.cutNodeConnection(node)
        }

        this.size--
    }

    private cutNodeConnection(node: Node): void {
        node.prev = node.next = null
    }
}

export default LinkedList
