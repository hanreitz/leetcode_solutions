var checkInclusion = function(s1, s2) {
  // sort s1
  // sliding window can only be s1 in length
  // sort s2
  
  // for loop for s1 - each letter charCode - 97
  if(s1.length > s2.length) return false
  
  let s1Array = new Array(26).fill(0)
  let windowArray = new Array(26).fill(0)
  
  for(char of s1){
      s1Array[char.charCodeAt() - 97]++
  }
  
  for(let i = 0; i < s1.length; i++){
      windowArray[s2[i].charCodeAt() - 97]++
  }
  let left = 0;
  let right = s1.length - 1
  
  while(right < s2.length){
      if(s1Array.join() === windowArray.join()) return true
      right++
      if(right === s2.length) break
      windowArray[s2[left].charCodeAt() - 97] -= 1
      windowArray[s2[right].charCodeAt() - 97] += 1
      left++
  }
  return false
};