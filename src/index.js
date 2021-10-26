const { SinglyLinkedList } = require('./_ds');

const sll = new SinglyLinkedList();

sll.insert([2, 3, 40, 50]);
sll.insert(1);
sll.print();
sll.insertAtIndex(21, 5);
console.log(sll.getTail());
sll.print();
// console.log(sll.getNodeByData(3));
// console.log(sll.getNodeByIndex(4))
// sll.removeFromHead();
// sll.removeFromHead();
// sll.removeFromHead();
// sll.removeFromHead();
// sll.removeFromTail();
// sll.print();
// sll.insertAtHead(7)
// sll.print()
export const test = async (logger, event) => {
  try {
    const a = 1;
    logger.debug(a, 'a');
    return 5;
  } catch (error) {

  }
};
