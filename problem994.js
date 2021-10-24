var orangesRotting = function(grid) {
  let rottenQueue = []
  let minutes = 0
  let fresh = 0
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) fresh++
      if (grid[i][j] === 2) rottenQueue.push([i, j])
    }
  }
  
  const makeMoves = [[0, -1], [0, 1], [-1, 0], [1, 0]]
  
  while (rottenQueue.length && fresh) {
    let rottingOranges = []
    while (rottenQueue.length) {
      let [x, y] = rottenQueue.shift()
      for (let i = 0; i < makeMoves.length; i++) {
        let [x2, y2] = [x + makeMoves[i][0], y + makeMoves[i][1]]
        
        if (grid[x2] && grid[x2][y2] === 1) {
          grid[x2][y2] = 2
          fresh--
          rottingOranges.push([x2, y2])
        }
      }
    }
    rottenQueue = rottingOranges
    minutes++
  }
  return fresh ? -1 : minutes
}