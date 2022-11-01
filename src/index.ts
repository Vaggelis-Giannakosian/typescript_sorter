import {Sorter} from "./Sorter";
import {NumbersCollection} from "./Collections/NumbersCollection";
import {CharactersCollection} from "./Collections/CharactersCollection";
import {LinkedList} from "./Collections/LinkedList";


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection)
sorter.sort()

console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection("cΧbdaΧ");
const charactersSorter = new Sorter(charactersCollection)
charactersSorter.sort()

console.log(charactersCollection.data)


const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(1);
linkedList.add(0);
linkedList.add(100);
const linkedListSorter = new Sorter(linkedList)
linkedListSorter.sort()
linkedList.print();
