/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @link https://leetcode-cn.com/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) {
        return root;
    }

    // 递归子问题
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};