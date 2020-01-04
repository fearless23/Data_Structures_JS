const { getNodeByType, getNodeByIndex } = require("./_helpers");
const { isDataValid } = require("./_typeChecks");
class DataNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// const SinglyLinkedList = function(){
class SinglyLinkedList {
  constructor() {
    this.head = null;
    // If only tail is required.
    this.tail = null;
    this.size = 0;
  }

  getNodeByData(data) {
    return getNodeByType("currData")(this.head, data);
  }

  getPrevNodeByData(data) {
    return getNodeByType("prevData")(this.head, data);
  }

  getNodeByIndex(idx) {
    return getNodeByIndex(this.head, idx, this.size);
  }

  getTail() {
    return this.tail;
  }

  // Private Method
  addFirstItem(newNode) {
    this.head = newNode;
    this.tail = this.head;
    this.size++;
  }

  // Private Method: Single Node add to Tail
  addToTail(data) {
    const newNode = new DataNode(data);
    if (!this.head) this.addFirstItem(newNode);
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  // Private Method: Single node insertion before head
  addBeforeHead(data) {
    const newNode = new DataNode(data);
    if (!this.head) this.addFirstItem(newNode);
    else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }

  // Public Method...
  insert(data) {
    const dataType = isDataValid(data);
    if (dataType === "number") {
      this.addToTail(data);
      return `Data inserted: ${data} `;
    }
    if (dataType === "numberArray") {
      for (let num of data) this.addToTail(num);
      return `Data Inserted: ${data.join(",")}`;
    }
  }

  // Public Method...
  insertAtHead(data) {
    const dataType = isDataValid(data);
    if (dataType === "number") {
      this.addBeforeHead(data);
      return `Data inserted: ${data} `;
    }
    if (dataType === "numberArray") {
      for (let num of data.reverse()) this.addBeforeHead(num);
      return `Data Inserted: ${data.join(",")}`;
    }
  }

  // Public Method...
  insertAtIndex(data, idx) {
    if (idx === 0) {
      this.addBeforeHead(data);
      return;
    }
    if (idx === this.size) {
      this.addToTail(data);
      return;
    }
    const prevNode = getNodeByIndex(this.head, idx - 1, this.size);
    const newNode = new DataNode(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  removeHead() {
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

  removeTail() {
    if (!this.tail) return;

    if (this.size === 1) {
      const toDelete = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return toDelete;
    }

    const prev = getNodeByIndex(this.head, this.size - 2, this.size);
    const tail = prev.next; // Tail
    // Deletion Operation
    prev.next = tail.next;

    this.tail = prev;
    return tail;
  }

  removeAtIdx(idx) {
    
    if (!this.tail) return;

    if (this.size === 1 && idx === 0) {
      const toDelete = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return toDelete;
    }

    if (idx > 0)
      const prev = getNodeByIndex(this.head, this.size - 2, this.size);
    const tail = prev.next; // Tail
    // Deletion Operation
    prev.next = tail.next;

    this.tail = prev;
    return tail;
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
