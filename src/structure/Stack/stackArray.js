class Stack {
  constructor() {
    this.items = []
  }

  push(ele) {
    this.items.push(ele)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

module.exports = Stack

// const stack = new Stack();
// console.log(stack.isEmpty(), 'stack isEmity');

// stack.push(1)
// stack.push(18)
// console.log(stack.items, 'stack.items');

// console.log(stack.peek(), 'stack peek');

// stack.push(22)

// console.log(stack.isEmpty(), 'stack isEmpty');
// stack.push(28)
// console.log(stack.size(), 'stack size');

// stack.pop();
// stack.pop();
// console.log(stack.size(), 'stack size');
