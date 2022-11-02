import {NumbersCollection} from "./Collections/NumbersCollection";
import {CharactersCollection} from "./Collections/CharactersCollection";
import {LinkedList} from "./Collections/LinkedList";


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort()

console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection("cΧbdaΧa");
charactersCollection.sort()

console.log(charactersCollection.data)


const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(1100);
linkedList.add(0);
linkedList.add(1);

linkedList.sort()
linkedList.print();
