class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue(ele) {
    this.items[this.count] = ele
    this.count++
  }

  isEmpty() {
    return this.size() === 0
  }

  dequeue() {
    if (this.isEmpty())
      return undefined

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]

    this.lowestCount++
    return result
  }

  peek() {
    if (this.isEmpty())
      return undefined

    return this.items[this.lowestCount]
  }

  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString() {
    if (this.isEmpty())
      return undefined

    let objstring = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++)
      objstring = `${objstring}, ${this.items[i]}`

    return objstring
  }
}

// const queue = new Queue();
module.exports = {
  Queue,
}

