# Static and Dynamic Arrays

## Static Array

A `static array` is a fixed length containing `n` elements `indexable` from the range `0` to `n-1`

### Indexable

Each index in the array can be referenced with a number.

### Static Array Uses:

- Storing and accessing sequential data
- Temporarily storing objects
- Used by IO routines as buffers
- Loopup tables and inverse lookup tables
- Can be used to return multiples values from a function
- Used in dynamic programming to cache answers to subproblems.

### Complexity

| Operation(&darr;) | Static Array | Dynamic Array |
| ----------------- | ------------ | ------------- |
| Access            | O(1)         | O(1)          |
| Search            | O(n)         | O(n)          |
| Insert            | `N/A`        | O(n)          |
| Append            | `N/A`        | O(1)          |
| Delete            | `N/A`        | O(n)          |

- Access: Get item at
- Search: Look over entire array in worst case
- Insertion: Insert at an index and then shift remaining.
- Appending: Add at end thus constant
- Deletion: Delete from end is O(1), but other index will be O(n) as items after deletion index has to be deleted.

### Implementation of Dynamic Array

1. Using static array

- Create static array with initial capacity
- Add elements to static array.
- Once, its full. Create new static array with double the capacity of existing array and copy elements
