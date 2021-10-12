var sortedSquares = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let track = right;
  let squared = [];
  
  while(left <= right){
      if(nums[left]**2 > nums[right]**2){
          squared[track] = nums[left]**2
          left++
      } else {
          squared[track] = nums[right]**2
          right--
      }
      track--
  }
  
  return squared;
};