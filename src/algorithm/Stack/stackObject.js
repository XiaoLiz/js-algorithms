class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(ele) {
    this.items[this.count] = ele
    this.count++
  }

  pop() {
    if (this.isEmpty())
      return undefined

    this.count--
    const result = this.items[this.count]
    console.log(result, 'result')
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty())
      return undefined

    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  clear() {
    // this.items = {};
    // this.count = 0;

    // 递归
    while (!this.isEmpty())
      this.pop()
  }

  toString() {
    if (this.isEmpty())
      return ''

    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++)
      objString = `${objString}, ${this.items[i]}`

    return objString
  }
}
module.exports = Stack
// const stack = new Stack();

// console.log(Object.getOwnPropertyNames(stack))
// console.log(Object.keys(stack))
// console.log(stack.items)
// stack.push(1);
// stack.push(3);
// stack.push(5);

// console.log(stack.items, 'stack');
// console.log(stack.clear(), 'clear');
// console.log(stack.items, 'stack.items');
// console.log(stack.toString(), 'toString');

