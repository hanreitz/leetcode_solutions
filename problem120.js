var minimumTotal = function(triangle) {
  // start at the second to last row
  // replace each number with the Math.min of it and one of the two 'paths' below it
  // do that all the way up
  // return the top number
  
  for(let row = triangle.length - 2; row >= 0; row--){
      for(let col = 0; col < triangle[row].length; col++){
          triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1])
      }
  }
  
  return triangle[0][0]
  
};