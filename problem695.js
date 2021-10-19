var maxAreaOfIsland = function(grid, row = 0, col = 0, currentMax = 0) {
  // loop through whole array
  // do 'flood fill' when hit 1
  // after counting a 1 make it a 0 to avoid double-counting
  let maxArea = 0;
  
  const islandCheck = (row,col) => {
      if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || !grid[row][col]){
          return 0
      }
      grid[row][col] = 0
      return 1 + islandCheck(row + 1, col) + islandCheck(row - 1, col) + islandCheck(row, col + 1) + islandCheck(row, col - 1)
  }
  
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
          if(grid[i][j]){
              maxArea = Math.max(maxArea, islandCheck(i, j))
          }
      }
  }
  
  return maxArea
};