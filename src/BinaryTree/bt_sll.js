class DataNode {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeSLL {
  constructor () {
    this.root = null;
  }

  insert (data) {
    const newNode = new DataNode(data);

    // Empty Tree
    if (!this.root) {
      this.root = newNode;
      return;
    }

    // Tree has root...Recursively add newNode
    this.addNode(this.root, newNode);
  }

  addNode (startNode, newNode) {
    if (newNode.data <= startNode.data) {
      if (startNode.left) {
        this.addNode(startNode.left, newNode);
      } else {
        startNode.left = newNode;
      }
    } else {
      if (startNode.right) {
        this.addNode(startNode.right, newNode);
      } else {
        startNode.right = newNode;
      }
    }
  }

  insertValues (vals) {
    for (const k of vals) this.insert(k);
  }

  search (val) {}
}

const x = new BinaryTreeSLL();
x.insertVals([6, 3, 5, 2, 5, 4, 7, 4]);
console.log(x.root);
