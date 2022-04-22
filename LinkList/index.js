import { defaultEquals }  from './utils/defaultEquals.js'
import { Node }  from './utils/link-list-models.js'


export default class LinkedList {
    constructor(equalsFn = defaultEquals ) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn; // 比较链表数是否相等，调用内部函数名
    }

    // 向链表尾部添加一个新元素。
    push(element) {
        /**
         * 时间复杂度 O(N)
         * 空间复杂度 O(1)
        **/

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


}

const list = new LinkedList()
list.push(10)
list.push(12)
list.push(13)













