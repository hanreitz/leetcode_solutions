var rob = function(nums) {

  if(nums.length === 1) return nums[0]
  
  let robTrack = [];
  [robTrack[0], robTrack[1]] = [nums[0], Math.max(nums[0], nums[1])];
  
  for(let i = 2; i < nums.length; i++){
      robTrack[i] = Math.max((nums[i] + robTrack[i - 2]), robTrack[i - 1])
  }

  return robTrack[nums.length - 1]
};