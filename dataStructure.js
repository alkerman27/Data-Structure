//10--->5--->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }
// myLinkedList[1][2]

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head;
    this.head = newNode
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseIndex(index-1)
    const holdingPointer = leader.next
    leader.next = newNode;
    newNode.next = holdingPointer
    this.length++;
    return this;

  }
  remove(index) {
    if(index >= this.length) {
      console.log(`Sorry index not existed!`);
    } else if (index == 0 ) {
      this.head = this.head.next
      this.length--;
      return this;
    }
    else {
      let leader = this.traverseIndex(index - 1)
      let holdingPointer = leader.next;

    if (index === this.length - 1) {
      console.log('last index', this.printList());
      leader.next = null;
      this.tail = leader;
      this.length--;
      return this;
      console.log('last index', this.printList());
    } 
     else {
      console.log(this.printList());
      leader.next = holdingPointer.next;
      this.length--;
      return this;
    }
   }
  }
  reverse() {
    if(!this.head.next) {
      return this.head
    }
    let first = this.head;
    this.tail = this.head
    let second = first.next;
    while(second) {
      console.log('2.first', first); // cosole logging
      console.log('3.second', second); // cosole logging
      const temp = second.next
      console.log('temp', temp); // cosole logging
      second.next = first
      first = second
      console.log('first', first); // cosole logging
      second = temp
      console.log('second', second); // cosole logging 
      
      console.log('-----------------'); // cosole logging
    }
    console.log('head',this.head);
    this.head.next = null
    this.head = first
    return this;
  }

  traverseIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(33)
myLinkedList.prepend(20)
myLinkedList.prepend(50)
myLinkedList.insert(6, 66)
myLinkedList.insert(3, 99)

console.log(myLinkedList.printList());
// myLinkedList.remove(0)
console.log(myLinkedList.reverse())
// console.log(myLinkedList);
console.log(myLinkedList.printList());