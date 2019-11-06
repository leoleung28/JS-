/** 
* 本模块主要用于记录树的基本概念及方法
* @author: LeoLeung
*/

var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
}

var Print = (value) => {
    console.log(value);
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // 插入节点
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key); //子方法
        }
    }
    // 插入节点子方法
    insertNode(node, key) {
        if (key < node.key) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key); // through Recursion
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key); // through Recursion
            }
        }
    }
    /***** 中序遍历 *****/
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root,callback);
    }
    inOrderTraverseNode(node,callback){
        if (node != null){
            this.inOrderTraverseNode(node.left,callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right,callback);
        }
    }
    /***** END of 中序遍历 *****/

    /***** 先序遍历 *****/
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root,callback);
    }
    preOrderTraverseNode(node,callback){
        if (node != null){
            callback(node.key);
            this.preOrderTraverseNode(node.left,callback);
            this.preOrderTraverseNode(node.right,callback);
        }
    }
    /***** END of 先序遍历 *****/

    /***** 后序遍历 *****/
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root,callback);
    }
    postOrderTraverseNode(node,callback){
        if(node != null){
            this.postOrderTraverseNode(node.left,callback);
            this.postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    }
    /***** END of 后序遍历*****/

    /***** 返回最小值 *****/
    min(){
        var current = this.root;
        while(current != null && current.left != null){
            current = current.left;
        }
        return current.key
    }
    /***** 返回最大值 *****/
    max(){
        var current = this.root;
        while(current != null && current.right != null){
            current = current.right;
        }
        return current.key
    }
    /***** 返回特定值 *****/
    search(key,callback){
        this.searchNode(this.root,key,callback);
    }
    searchNode(node,key,callback){
        if (node == null){
            console.log('node ' + key + ' does not exists');
            return false
        }
        if (key < node.key){
            this.searchNode(node.left,key,callback);
        }else if (key > node.key){
            this.searchNode(node.right,key,callback);
        }else{
            callback(key);
            return true
        }
    }
    /**
     * 二叉树的最大深度
     */
    BSTDepth(){
        return this.maxDepth(this.root);
    }
    maxDepth(root){
        var depth = 0;
        if (root == null){
            return depth
        }
        var l1 = this.maxDepth(root.left);
        var l2 = this.maxDepth(root.right);
        return Math.max(l1,l2)+1
    };
    /***** END *****/


    
}

var BST = new BinarySearchTree();
BST.insert(11);
BST.insert(7);
BST.insert(8);
BST.insert(24);
BST.insert(1);
BST.insert(34);
BST.insert(28);
BST.inOrderTraverse(Print);
console.log(`最小值为：${BST.min()}`);
console.log(`最大值为：${BST.max()}`);
BST.search(9,Print);
BST.search(28,Print);
console.log(`树的最大深度为:${BST.BSTDepth()}`);
