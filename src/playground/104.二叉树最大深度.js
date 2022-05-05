/**
 * @link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    if (root == null) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
