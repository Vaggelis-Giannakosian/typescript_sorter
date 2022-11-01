import {Sortable} from "./Sortable";

class Node {
    next: Node | null = null;

    constructor(public data: number) {
    }
}

export class LinkedList implements Sortable {
    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data);

        if (!this.head) {
            this.head = node
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next
        }
        tail.next = node;
    }

    get length(): number {
        if(!this.head) return 0;

        let length = 0;
        let tail = this.head;
        while (tail.next) {
            tail = tail.next
            length++;
        }

        return length;
    }

    at(index: number): Node {
        if(!this.head) {
            throw new Error('Index out of bounds')
        }

        let position = 0;
        let node = this.head;
        while (node.next) {
            if(position === index) return node;

            node = node.next
            position++;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) return false;

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftNodeData = leftNode.data;

        leftNode.data = rightNode.data;
        rightNode.data = leftNodeData;
    }

    print(): void {
        if(!this.head) return;

        const result = [];

        let tail: Node | null = this.head;
        while (tail) {
            result.push(tail.data);
            tail = tail.next;
        }

        console.log(result);
        return;
    }
}
