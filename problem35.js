var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1
  
  if(target < nums[0]){
      return 0
  } else if (target > nums[nums.length - 1]){
      return nums.length
  }
  
  while(left <= right){
      let middle = Math.floor((left + right)/2)
      
      if(nums[middle] < target && nums[middle + 1] > target){
          return middle + 1
      } else if(nums[middle] < target){
          left = middle + 1
      } else if (nums[middle] > target){
          right = middle - 1
      } else {
          return middle
      }   
  }
};