var merge = function(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  
  while (i < m && j < n){
      if(nums1[i] < nums2[j]){
          i++
      } else if(nums1[i] > nums2[j]){
          nums1[i] = nums2[j]
          nums1[i + 1] = nums1[i]
          j++
      }
  }
  
  while(j < n){
      console.log('last')
      nums1[j++] = nums2[j]
      console.log(nums1)
  }
  
  console.log(nums1)
};