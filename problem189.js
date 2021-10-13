// Rotate Array
// 116 ms (faster than 57.05%); 50.7 MB (less than 8.47%)

const customReverse = (array, start, end) => {
  while(start < end){
      [array[start++], array[end--]] = [array[end], array[start]]
  }
  return array
}

var rotate = function(nums, k) {
  k = k % nums.length
  if(k === 0){
      return nums
  }
  nums.reverse()
  customReverse(nums, 0, k - 1)
  customReverse(nums, k, nums.length - 1)
};