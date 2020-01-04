const isCurrDataNode = (curr, data) => curr.data === data;
const isPrevDataNode = (curr, data) => curr.next && curr.next.data === data;
const isCurrNode = (curr, node) => curr === node;
const isPrevNode = (curr, node) => curr.next && curr.next === node;

const getCompareFn = function(type) {
  const types = {
    curr: isCurrNode,
    prev: isPrevNode,
    currData: isCurrDataNode,
    prevData: isPrevDataNode
  };
  return types[type];
};

const compareNodes = function(startNode, data, compareFn) {
  let currNode = startNode;
  while (currNode) {
    if (compareFn(currNode, data)) break;
    currNode = currNode.next;
  }
  return currNode;
};

exports.getNodeByType = function(type) {
  return function(startNode, data) {
    const compareFn = getCompareFn(type);
    return compareNodes(startNode, data, compareFn);
  };
};

exports.getNodeByIndex = function(head, idx, size) {
  if (idx < 0 || idx >= size) {
    throw RangeError(`Index out of bounds, use value between 0 & ${size - 1}`);
  }
  let curr = head;
  let i = 0;
  while (curr && i < idx) {
    i++;
    curr = curr.next;
  }
  return curr;
};
