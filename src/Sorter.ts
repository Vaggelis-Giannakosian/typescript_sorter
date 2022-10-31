import {NumbersCollection} from "./NumbersCollection";

export class Sorter {
    constructor(public collection: NumbersCollection) {
    }

    sort(): void {
        for (let i = 0; i < this.collection.length; i++) {
            for (let j = 0; j < this.collection.length - i - 1; j++) {

                if (this.collection.compare(i,j)) {
                    this.collection.swap(i,j)
                }
            }
        }
    }
}