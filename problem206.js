var reverseList = function(head) {
  function reverseNode(currentNode, previousNode){
      if(currentNode === null){
          return previousNode
      }
      
      let next = currentNode.next
      currentNode.next = previousNode
      return reverseNode(next, currentNode)
  }
  
  return reverseNode(head,null)
};