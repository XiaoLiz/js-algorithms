/**
 *
 * insert(key)：向树中插入一个新的键。
 * search(key)：在树中查找一个键。如果节点存在，则返回true；如果不存在，则返回false。
 * inOrderTraverse()：通过中序遍历方式遍历所有节点。
 * preOrderTraverse()：通过先序遍历方式遍历所有节点。
 * postOrderTraverse()：通过后序遍历方式遍历所有节点 min()：返回树中最小的值/键。
 * max()：返回树中最大的值/键。
 * remove(key)：从树中移除某个键。
*/

import { Node } from './node.js';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        let newNode = new Node(key)

        if(this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        // let newNode = new Node(key)

        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
// tree.insert(3)
// tree.insert(9)
// tree.insert(8)
// tree.insert(10)
// tree.insert(13)
// tree.insert(12)

console.log(tree)