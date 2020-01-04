# Linked List

A `linked list` is a sequential list of nodes that hold data which points to other node(s), also containng data.

- `Node`: An object containing data and reference/pointer to other node(s).
- `Head`: The first node in a linked list.
- `Tail`: The last node in a linked list.
- `Pointer`: Reference to another node.

### Singly Linked List (SLL):

Each node starting from head point only to next node until tail. Tail points to null.

### Doubly Linked List (DLL):

Each node starting from head points to previous and next node.
- `Head` previous pointer points to null and next pointer points to next Node.
- `Tail` previous pointer points to previous node and next pointer points to null.

### SLL vs DLL

| List Type | Pros                                       | Cons                                   |
| --------- | ------------------------------------------ | -------------------------------------- |
| SLL       | Use Less Memory<br/>Simpler Implementation | Cannot easily access previous elements |
| DLL       | Can be traversed backwards                 | Takes 2x memory                        |

### Uses

- In Lists, Queues and Stack Implementation
- Great for creating circular lists.
- Can easily model real world objects such as trains.
- Used in seperate chaining, which is present in certain Hashtable implementation to deal with hashing collisions.
- Often used in the implementation of adjacency lists for graphs.

### Time Complexity

| Operation(&darr;) | SLL    | DLL  |
| ----------------- | ------ | ---- |
| Search            | O(n)   | O(n) |
| Insert at head    | O(1)   | O(1) |
| Insert at tail    | O(1)   | O(1) |
| Remove at head    | O(1)   | O(1) |
| Remove at tail    | `O(n)` | O(1) |
| Remove at Middle  | O(n)   | O(n) |
