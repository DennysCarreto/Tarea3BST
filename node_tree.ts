export class NodeTree {
    private data: number;
    private father: NodeTree;
    private leftChild: NodeTree;
    private rightChild: NodeTree;
    private isLeafNode: boolean;

    constructor(data: number, isLeaf: boolean = false) {
        this.data = data;
        this.isLeafNode = isLeaf;
        this.father = this; // referencia a sí mismo para las hojas
        this.leftChild = this; // referencia a sí mismo para las hojas
        this.rightChild = this; // referencia a sí mismo para las hojas
    }

    public getData(): number {
        return this.data;
    }

    public setFather(newFather: NodeTree): void {
        this.father = newFather;
    }

    public getFather(): NodeTree {
        return this.father;
    }

    public setLeftChild(newChild: NodeTree): void {
        this.leftChild = newChild;
    }

    public getLeftChild(): NodeTree {
        return this.leftChild;
    }

    public setRightChild(newChild: NodeTree): void {
        this.rightChild = newChild;
    }

    public getRightChild(): NodeTree {
        return this.rightChild;
    }

    public isLeaf(): boolean {
        return this.isLeafNode;
    }
}
