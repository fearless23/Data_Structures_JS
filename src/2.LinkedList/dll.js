class DataNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    // If only tail is required.
    this.tail = null;
    this.size = 0;
  }

  getNode(data) {
    let curr = this.head;
    while (curr.data !== data) {
      curr = curr.next;
    }
    return curr;
  }

  getTail() {
    return this.tail;
  }

  getPrevNode(data) {
    let curr = this.head;
    while (curr.next) {
      if (curr.next.data === data) {
        break;
      }
      curr = curr.next;
    }
    return curr;
  }

  insertSingleAtTail(data) {
    const newNode = new DataNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Add to Tail of
  insert(data) {
    if (typeof data === "number") {
      this.insertSingleAtTail(data);
      return;
    }
    if (Array.isArray(data)) {
      for (let num of data) {
        this.insertSingleAtTail(num);
      }
      return;
    } else {
      throw new Error("Data should be a number or array of mumbers");
    }
  }

  insertAtHead(data) {
    const newNode = new DataNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  removeFromHead() {
    if (!this.head) return false;

    const toDelete = this.head;
    this.head = toDelete.next;
    this.size--;

    // Size After Remove = 0
    if (this.size === 0) {
      this.tail = null;
    }
    return toDelete.data;
  }

  removeFromTail() {
    if (!this.tail) {
      return;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    const toDelete = curr.next;
    curr.next = toDelete.next;
    this.tail = curr;
    return toDelete;
  }

  length() {
    return this.size;
  }

  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return false;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  print(name = "SLL") {
    let curr = this.head;
    let str = "HEAD\n";
    while (curr) {
      str += "--> " + curr.data + " ";
      curr = curr.next;
    }
    const x = name + "\n" + str;
    console.log(x);
    return x;
  }
}

module.exports = { SinglyLinkedList };
