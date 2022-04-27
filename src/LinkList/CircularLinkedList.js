import { Node } from './utils/link-list-models.js'
import { defaultEquals } from './utils/defaultEquals.js'
import { LinkedList } from './LinkedList.js'

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  // 任意位置插入节点
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head

      if (index === 0) {
        if (this.head == null) {
          this.head = node
          node.next = this.head // 末尾node节点指向第一个节点
        }
        else {
          node.next = current
          this.head = node

          current = this.getElementAt(this.size())
          current.next = this.head
        }
      }
      else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  // 任意位置删除节点
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined
        }
        else {
          const removed = this.head
          current = this.getElementAt(this.count - 1)
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      }
      else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }

      this.count--
      return current.element
    }

    return undefined
  }
}

const list = new CircularLinkedList()
list.push(12)
list.push(13)
list.push(14)

// list.insert(12, 0)

console.log(list.removeAt(2))
console.log(list.head)
