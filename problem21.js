var mergeTwoLists = function(l1, l2) {
  // [1,2,4] [1,3,4]
  // [1,1,3,4] [2,4]
  // compare first two nodes
  // if they are the same, arbitrarily pick one to be set to the 'next' of the other
  // if one is less, make it the first node of the return and then advance to the next node of that list

  const mergeList = new ListNode(0,null)
  let current = mergeList

  while(l1 && l2){
      if(l1.val < l2.val){
          current.next = l1
          l1 = l1.next
      } else {
          current.next = l2
          l2 = l2.next
      }
      current = current.next
  }
  
  current.next = l1 || l2
  
  return mergeList.next
};