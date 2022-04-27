import { defaultEquals } from './utils/defaultEquals.js'
import { Node } from './utils/link-list-models.js'

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn // 比较链表数是否相等，调用内部函数名
  }

  // 向链表尾部添加一个新元素。
  push(element) {
    /**
         * 时间复杂度 O(N)
         * 空间复杂度 O(1)
        **/

    const node = new Node(element)
    let current
    // console.log(this.head, 'this.head');

    if (!this.head) {
      this.head = node
    }
    else {
      current = this.head

      // 头结点指向不为空，，循环找到最后一个节点
      while (current.next != null)
        current = current.next

      // 将其赋值为新元素，建立链接
      current.next = node
    }
    this.count++
  }

  // 从链表的自定位置移除一个元素。
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      // 移除第一项
      if (index === 0) {
        this.head = current.next
      }
      else {
        // let previous;
        // for (let i = 0; i < index; i++) {
        //     console.log(i)
        //     previous = current;
        //     current = current.next;
        // }
        // previous.next = current.next;

        // refactor
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }

      this.count--
      return current.element
    }
    return undefined
  }

  // 获取指定node
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++)
        node = node.next

      return node
    }
    return undefined
  }

  // 任意位置插入节点
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      }
      else {
        const previous = this.getElementAt(index - 1)
        // const current = previous.next
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }

    return false
  }

  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element))
        return i

      current = current.next
    }
    return -1
  }

  // 链表中移除元素
  removeEle(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head == null)
      return ''

    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`
      current = current.next
    }
    return objString
  }
}

// const list = new LinkedList()
// list.push(10)
// list.push(12)
// list.push(13)

// list.insert(11, 1);
// console.log(list.toString(), 'toString');

