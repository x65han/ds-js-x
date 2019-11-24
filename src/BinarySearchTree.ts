class BinarySearchTreeNode {
    value: number;
    left: BinarySearchTreeNode | null = null;
    right: BinarySearchTreeNode | null = null;
    parent: BinarySearchTreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

class BinarySearchTree {
    private root: BinarySearchTreeNode | null = null
    private size: number = 0;

    public getSize(): number {
        return this.size
    }

    public inOrderTraversal(): Array<number> {
        const res = new Array<number>()

        if (this.root) {
            this.inOrderTraversalImpl(this.root, res)
        }

        return res
    }

    private inOrderTraversalImpl(node: BinarySearchTreeNode, res: Array<number>): void {
        node.left && this.inOrderTraversalImpl(node.left, res)
        res.push(node.value)
        node.right && this.inOrderTraversalImpl(node.right, res)
    }

    public add(value: number): void {
        this.size++
        if (!this.root) {
            this.root = new BinarySearchTreeNode(value)
        }

        let node = this.root
        while (node) {
            if (value < node.value) {
                if (node.left) {
                    node = node.left
                } else {
                    node.left = new BinarySearchTreeNode(value)
                    node.left.parent = node
                    break
                }
            } else {
                if (node.right) {
                    node = node.right
                } else {
                    node.right = new BinarySearchTreeNode(value)
                    node.right.parent = node
                    break
                }
            }
        }
    }

    public remove(value: number): boolean {
        if (this.getSize() === 0) {
            return false
        }

        return this.removeImpl(this.root!, value);
    }

    private removeImpl(startBinarySearchTreeNode: BinarySearchTreeNode, value: number): boolean {
        if (!startBinarySearchTreeNode) {
            return false
        }

        let node: BinarySearchTreeNode | null = startBinarySearchTreeNode

        if (value < node.value) {
            if (node.left) {
                this.removeImpl(node.left, value)
            } else {
                return false
            }
        } else if (value > node.value) {
            if (node.right) {
                this.removeImpl(node.right, value)
            } else {
                return false
            }
        } else {
            if (!node.left || !node.right) {
                node = (node.left) ? node.left : node.right
            } else {
                let run = node.right;
                while (run.left) {
                    run = run.left
                }
                node.value = run.value
                this.removeImpl(node.right, run.value)
            }

            return true
        }

        return false
    }

    public has(value: number): boolean {
        let node = this.root;
        while (node) {
            if (node.value === value) {
                return true
            }

            node = value < node.value ? node.left : node.right
        }

        return false
    }
}

export default BinarySearchTree