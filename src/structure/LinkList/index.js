// //链表  1=>2=>3=>4=>5

// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class LinkNodeList {
//     constructor() {
//         this.head = null
//         this.length = 0
//     }

//     append(val) {
//         let node = new Node(val)
//         let p = this.head;

//         if (this.head) {
//             //找到最后的节点，把这个节点.next属实赋值给node// 没搞明白为什么这么写
//             while(p.next) {
//                 p = p.next
//             }
//             p.next = node;
//         } else {
//             // 没有head节点，链表此时为空，把要创建的节点赋值给head
//             this.head = node;
//         }
//         this.length++;
//     }

//     print() {
//         let p = this.head;
//         let ret = '';
//         if (this.head) {
//             do {
//                 ret += (p.val +'=>');
//                 p = p.next;
//             } while (p.next)
//             ret += p.val;

//             console.log(ret)
//         } else {
//             console.log('empty')
//         }
//     }
// }

// const linkNode = new LinkNodeList();

// linkNode.append(1)
// linkNode.append(2)
// linkNode.append(3)
// linkNode.append(4)
// linkNode.print();

// console.log(linkNode.length)
// //链表  1=>2=>3=>4

