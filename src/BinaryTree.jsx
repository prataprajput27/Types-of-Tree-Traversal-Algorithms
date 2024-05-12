// Define the binary tree node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree data structure
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Function to add a node to the binary tree
  addNode(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      const queue = [this.root];
      while (queue.length > 0) {
        const current = queue.shift();
        if (!current.left) {
          current.left = node;
          break;
        } else if (!current.right) {
          current.right = node;
          break;
        } else {
          queue.push(current.left);
          queue.push(current.right);
        }
      }
    }
  }

  // In-order (DFS) algorithm
  inOrder(node, traversalArray) {
    if (node) {
      this.inOrder(node.left, traversalArray);
      traversalArray.push(node.value);
      this.inOrder(node.right, traversalArray);
    }
  }

  // Pre-order (DFS) algorithm
  preOrder(node, traversalArray) {
    if (node) {
      traversalArray.push(node.value);
      this.preOrder(node.left, traversalArray);
      this.preOrder(node.right, traversalArray);
    }
  }

  // Post-order (DFS) algorithm
  postOrder(node, traversalArray) {
    if (node) {
      this.postOrder(node.left, traversalArray);
      this.postOrder(node.right, traversalArray);
      traversalArray.push(node.value);
    }
  }

  // Level Order (BFS) algorithm
  levelOrder() {
    if (!this.root) {
      return [];
    }

    const queue = [this.root];
    const traversalArray = [];

    while (queue.length > 0) {
      const current = queue.shift();
      traversalArray.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return traversalArray;
  }
}

export default BinaryTree;
