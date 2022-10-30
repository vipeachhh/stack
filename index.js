class Stack {
  constructor() {
    this.stack = [];
    this.stackSize = 3;
  }
  add(item) {
    for (let i = this.stackSize - 1; i > 0; i--) {
      this.stack[i] = this.stack[i - 1];
    }
    this.stack[0] = item;
  }
  remove() {
    for (let i = 0; i < this.stackSize - 1; i++) {
      this.stack[i] = this.stack[i + 1];
      this.stack[i] = null;
    }
    //this.stack[i] = null;
  }
}

let stack1 = new Stack();
console.log(stack1);
stack1.add(1);
console.log(stack1);
stack1.add(2);
console.log(stack1);
stack1.add(3);
console.log(stack1);
stack1.remove();
console.log(stack1);
stack1.remove();
console.log(stack1);
stack1.remove();
console.log(stack1);
