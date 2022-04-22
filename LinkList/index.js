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

    // 从链表的自定位置移除一个元素。
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            // 移除第一项
            if(index == 0) {
                this.head = current.next;
            } else {
                // let previous;
                // for (let i = 0; i < index; i++) {
                //     console.log(i)
                //     previous = current;
                //     current = current.next;
                // }
                // previous.next = current.next;

                // refactor
                const previous = this.getElementAt(index-1);
                current = previous.next;
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        };

        return undefined;
    }



    // 获取指定位置node
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            };
            return node;
        };
        return undefined;
    }



}

const list = new LinkedList()
list.push(10)
list.push(12)
list.push(13)













