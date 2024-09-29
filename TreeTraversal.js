// javascript program for different tree traversals 
// Class containing left and right child of current
// node and key value
class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

// Root of Binary Tree 
let root = null;

// In-Order Traversal: Left -> Root -> Right 
function printInorder(node) {
    if (node == null)
        return;

    // First recur on left child */ 
    printInorder(node.left);

    // Then print the data of node 
    console.log(node.key);

    // Now recur on right child 
    printInorder(node.right);
}

// Pre-Order Traversal: Root -> Left -> Right 
function printPreorder(node) {
    if (node == null)
        return;
    // First print the data of node 
    console.log(node.key);

    // then recur on left child */ 
    printPreorder(node.left);

    // Now recur on right child 
    printPreorder(node.right);
}

// Post-Order Traversal: Left -> Right -> Root 
function printPostorder(node) {
    if (node == null)
        return;

    // then recur on left child */ 
    printPostorder(node.left);

    // Now recur on right child 
    printPostorder(node.right);

    // First print the data of node 
    console.log(node.key);
}

// Driver method 

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Inorder traversal of binary tree is ");
printInorder(root);
console.log("Preorder traversal of binary tree is ");
printPreorder(root);
console.log("Postorder traversal of binary tree is ");
printPostorder(root);
