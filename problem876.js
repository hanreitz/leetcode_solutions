// Middle of a Linked List
// 120 ms (faster than 8.97%); 38.5 MB (less than 79.33%)

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null){
      // for slow to mark the 1/2-way, fast has to move 2x slow
      slow = slow.next
      fast = fast.next.next
  }
  
  return slow
};