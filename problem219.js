// original solution
// 153 ms (54.06% faster); 60 MB (41.52% less)
var containsNearbyDuplicate = function(nums, k) {
  if(nums.length === 1) return false;
  
  let numMap = new Map();
  
  for(let i = 0; i < nums.length; i++) {
      if(numMap.has(nums[i]) && Math.abs(numMap.get(nums[i]) - i) <= k) {
          return true
      }
      numMap.set(nums[i], i);
  }
  return false;
};