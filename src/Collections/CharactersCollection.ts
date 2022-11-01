import {Sortable} from "./Sortable";
import {Sorter} from "../Sorter";

export class CharactersCollection implements Sortable {
    sorter: Sorter = new Sorter(this);

    constructor(public data: string) {
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');

        const leftElement = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftElement;

        this.data = characters.join('')
        return;
    }

    sort(): void {
        this.sorter.sort();
    }
}
