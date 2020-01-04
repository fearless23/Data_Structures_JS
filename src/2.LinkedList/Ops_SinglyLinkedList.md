# Singly Linked List Operations

15 &rarr; 21 &rarr; 9 &rarr; 11 &rarr; `null`

## Insertion

Insert new node (7) at `3`<sup>`rd`</sup> node; i.e. between `2`<sup>`nd`</sup>(21) and `3`<sup>`rd`</sup>(9) node.

`curr`: Current Node

1. Start with `curr` = `Head`.
2. Move `curr` to next node which is `curr`\`s next node
3. Keep moving until `curr`\`s next is `3`<sup>`rd`</sup> node (desired node). and `curr` = `2`<sup>`nd`</sup> node.

4. Make `newNode` next pointer equal to `curr`\`s next(`3`<sup>`rd`</sup> node)
5. Make `curr`\`s next equal to `newNode`

_Note:Step 4 and 5 are not interchangeable, if step 5 is done before 4, we loose any reference/pointer to 3rd node. Unlike array we don`t have index for refer_

## Deletion

`curr`: Current Node

1. Start `curr` = `Head`
2. Move until `curr` is one before node to delete or `curr`\`s next is desired node.
3. Create `temp` = toDelete node.
4. Delete toDelete node.
5. Make `curr` next pointer equal `temp` next node.

_Note: Make sure to delete orphan node and curr, temps to avoid memory leaks. Some Languages like JS are Garbage collected, which will delete unused variables. Some language like C require developer to explicitily delete unused variables._
