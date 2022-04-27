import { Node } from './utils/link-list-models.js'
import { defaultEquals } from './utils/defaultEquals.js'
import { LinkedList } from './LinkedList.js'

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedLit extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined // 保存对链表最后一个元素的引用
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head

      if (index === 0) {
        if (this.head == null) {
          this.head = node
          this.tail = node
        }
        else {
          node.next = this.head
          current.prev = node
          this.head = node
        }
      }
      else if (index === this.count) {
        // 最后一项
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      }
      else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
    }
  }

  // 从任意位置移除元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      // 移除第一项
      if (index === 0) {
        this.head = current.next
        if (this.count === 1)
          this.tail = undefined
        else
          this.head.prev = undefined
      }
      else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      }
      else {
        // refactor
        const current = this.getElementAt(index)
        const previous = current.prev

        // previous 与current连接
        previous.next = current.next
        current.next.prev = previous
      }

      this.count--
      return current.element
    }
    return undefined
  }
}

const list = new DoublyLinkedLit()
// list.push(10)
