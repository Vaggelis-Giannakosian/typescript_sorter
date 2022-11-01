import {Sortable} from "./Sortable";
import {Sorter} from "../Sorter";

export class NumbersCollection implements Sortable {
    sorter: Sorter = new Sorter(this);

    constructor(public data: number[]) {
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftElement = this.data[leftIndex];

        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftElement;
        return;
    }

    sort(): void {
        this.sorter.sort();
    }
}
