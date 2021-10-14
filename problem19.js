// two-pointer solution to removing nth element from linked list

var removeNthFromEnd = function(head, n) {
  let left = head;
  let right = head;
  
  if(!head.next) return null
  
  let i = 0;
  while(i++ < n){
      right = right.next
  }
  
  if(right === null){
      return head = head.next
  }
  
  while(right && right.next){
      right = right.next
      left = left.next
  }
  
  left.next = left.next.next ? left.next.next : null
  return head
};