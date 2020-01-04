class DataNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getTail() {
    let pointer = this.head;
    while (pointer.next) {
      pointer = currNode.next;
    }
    return pointer;
  }

  enqueue(data) {
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

  dequeue() {
    if (!this.head) {
      return false;
    } else {
      const item = this.head;
      this.head = this.head.next;
      this.size--;
      return item;
    }
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

  printQueue(name = "Queue") {
    let curr = this.head;
    let str = "FRONT -- ";
    while (curr) {
      str += "| " + curr.data + " ";
      curr = curr.next;
    }
    const x = name + "\n" + "--------\n" + str + " | -- BACK";
    console.log(x);
    return x;
  }
}

module.exports = { SLLBasedQueue: Queue };
