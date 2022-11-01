import {Sorter} from "./Sorter";
import {NumbersCollection} from "./Collections/NumbersCollection";
import {CharactersCollection} from "./Collections/CharactersCollection";


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection)
sorter.sort()

console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection("cbda");
const charactersSorter = new Sorter(charactersCollection)
charactersSorter.sort()

console.log(charactersCollection.data)

