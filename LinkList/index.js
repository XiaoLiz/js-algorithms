import { defaultEquals }  from './utils/defaultEquals.js'
import { Node }  from './utils/link-list-models.js'


export default class LinkedList {
    constructor(equalsFn = defaultEquals ) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn; // 比较链表数是否相等，调用内部函数名
    }

    push(element) {
        const node = new Node(element);

        let current;
        // console.log(this.head, 'this.head');

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            // 头结点指向不为空，，循环找到最后一个节点
            while (current.next != null) {
                current = current.next;
            }

            // 将其赋值为新元素，建立链接
            current.next = node
        }

        this.count++;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            // 移除第一项
            if(index == 0) {
                this.head = current.next;
            } else {
                let previous;

               for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
               }

            //    console.log(current, 'current')
               previous.next = current.next;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    }


}

const list = new LinkedList()
list.push(10)
list.push(11)
list.push(12)
list.push(13)

console.log(list.removeAt(2), 'this removeAt');
console.log(list.head, 'list head');














