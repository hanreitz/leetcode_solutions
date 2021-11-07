var maxSubArray = function(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER
  let runTot = 0
  
  for(let i = 0; i < nums.length; i++){
      runTot = Math.max(runTot + nums[i], nums[i])
      maxSum = Math.max(runTot, maxSum)
  }
  
  return maxSum
};