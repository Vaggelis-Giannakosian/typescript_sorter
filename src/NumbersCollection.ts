export class NumbersCollection {
    data: number []

    constructor(data: number[]) {
        this.data = data;
    }

    get length() : number{
        return this.data.length;
    }

    swap(i: number, j: number): void{
        const leftElement = this.data[j];
        this.data[j] = this.data[j + 1];
        this.data[j + 1] = leftElement;
    }

    compare(i: number, j: number): boolean{
        return  this.data[j] > this.data[j + 1]
    }
}
