var getIntersectionNode = function(headA, headB) {
  if(headA === headB) return headA
  
  let currA = headA
  let nextA = headA.next
  
  let currB = headB
  let nextB = headB.next
  
  while(currA){
      while(currB){
          if(currA === currB){
              return currA
          } else {
              currB = nextB
              nextB = nextB ? nextB.next : null
          }
      }
      currA = nextA
      nextA = nextA ? nextA.next : null
      currB = headB
      nextB = headB.next
  }
  
  return null
};