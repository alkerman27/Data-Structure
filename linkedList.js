// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = []
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  prepend(value) {
    const newNode = {
      value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value,
      next: null
    };
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer
    this.length++;
    return this.printList();
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
    if(!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      let temp = second.next;

      //---- first solution
      // second.next = first;
      // first = second;
      // second = temp;

      //---- another way of solving or second solution by destructuring
      [second.next, first, temp, second] = [first, second,  second.next, temp]

      //extension of console log the result:
      // console.log(`LOOP temp${counter4++}: `, temp);
   
      // console.log('----------------------------------------------');
    }
    this.head.next = null;
    this.head = first;
    return this.printList()
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
myLinkedList.append(16);
console.log(myLinkedList.prepend(7));
console.log(myLinkedList.insert(200, 11));
console.log(myLinkedList.insert(4, 99));
console.log(myLinkedList.insert(20, 109));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.reverse());

