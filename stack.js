class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value)
  
    if(this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      let currentTop = this.top
      this.top = newNode
      this.top.next = currentTop
    }
    this.length++
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();

console.log(myStack.peek());
console.log(myStack)
console.log(myStack.push('first stack'));
console.log(myStack.push('second stack'));
console.log(myStack.push('third stack'));
console.log(myStack.push('fourth stack'));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());