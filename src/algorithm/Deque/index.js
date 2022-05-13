class Deque {
  constructor() {
    this.count = 0
    this.lowesCount = 0
    this.items = {}
  }

  addFront(ele) {
    console.log(this.lowesCount, 'this.lowesCount')
    console.log(this.count, 'this.count')

    if (this.isEmpty()) {
      this.addBack(ele)
    }
    else if (this.lowesCount > 0) {
      this.lowesCount--
      this.items[this.lowesCount] = ele
    }
    else {
      for (let i = this.count; i > 0; i--)
        this.items[i] = this.items[i - 1]

      this.count++
      this.lowesCount = 0
      this.items[0] = ele
    }
  }

  addBack(ele) {
    this.items[this.count] = ele
    this.count++
  }

  removeFront() {
    if (this.isEmpty())
      return undefined

    const result = this.items[this.lowesCount]
    delete this.items[this.lowesCount]

    this.lowesCount++
    return result
  }

  removeBack() {
    if (this.isEmpty())
      return undefined

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]

    return result
  }

  peekFront() {
    if (this.isEmpty())
      return undefined

    return this.items[this.lowesCount]
  }

  peekBack() {
    if (this.isEmpty())
      return undefined

    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.count - this.lowesCount
  }

  clear() {
    this.count = 0
    this.lowesCount = 0
    this.items = {}
  }

  toString() {
    if (this.isEmpty())
      return undefined

    let objString = `${this.items[this.lowesCount]}`
    for (let i = this.lowesCount + 1; i < this.count; i++)
      objString = `${objString}, ${this.items[i]}`

    return objString
  }
}

module.exports = Deque

