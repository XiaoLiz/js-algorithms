const _items = Symbol('stackItems')

class Stack {
  constructor() {
    this.count = 0
    this[_items] = []
  }

  push(ele) {
    this[_items][this.count] = ele
    this.count++
  }

  pop() {
    if (this.isEmpty())
      return undefined

    this.count--
    const result = this[_items][this.count]
    delete this[_items][this.count]
    return result
  }

  peek() {
    if (this.isEmpty())
      return undefined

    return this[_items][this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  clear() {
    // this[_items] = {};
    // this.count = 0;

    // 递归
    while (!this.isEmpty())
      this.pop()
  }

  toString() {
    if (this.isEmpty())
      return ''

    let objString = `${this[_items][0]}`
    for (let i = 1; i < this.count; i++)
      objString = `${objString}, ${this[_items][i]}`

    return objString
  }
}

module.exports = Stack
// const stack = new Stack();
// stack.push(5);
// stack.push(8);

// const objectSymbols = Object.getOwnPropertySymbols(stack);
// console.log(objectSymbols.length);
// console.log(objectSymbols);
// console.log(objectSymbols[0]);

// console.log(stack[objectSymbols[0]].push(1));

// console.log(stack[objectSymbols[0]], 'stack');

// stack.push(3);
// stack.push(5);

// console.log(stack.items, 'stack');
// console.log(stack.clear(), 'clear');
// console.log(stack.items, 'stack.items');
// console.log(stack.toString(), 'toString');

