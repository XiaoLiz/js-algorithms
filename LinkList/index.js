import { defaultEquals }  from './utils/defaultEquals'
import { Node }  from './utils/link-list-models'


export default class LinkedList {
    constructor(equalsFn = defaultEquals ) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn; // 比较链表数是否相等，调用内部函数名
    }
}
