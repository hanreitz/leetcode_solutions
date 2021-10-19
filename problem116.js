// connecting nodes in binary tree to their next right neighbor
var connect = function(root) {
  if(!root) return null;
  
  const queue = [root];
  
  while(queue.length) {
      const size  = queue.length;
      const level = queue.slice();

      for(let i = 0; i < size; i++) {
          const currentNode = queue.shift();
          currentNode.next  = level[i + 1];
          if(currentNode.left)  queue.push(currentNode.left);
          if(currentNode.right) queue.push(currentNode.right);
      }
  }
  
  return root
};