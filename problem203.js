var removeElements = function(head, val) {
  if(!head) return null
  
  let prevNode = head
  let currNode = head.next
  
  while(currNode){
      if(currNode.val === val){
          currNode = currNode.next
          prevNode.next = currNode
      } else {
          prevNode = currNode
          currNode = currNode.next
      }
  }
  
  if(head.val === val) return head.next
  
  return head
};