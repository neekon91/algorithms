const uniquePaths = (m, n) => {
  let grid = [];
  for (let i = 0; i < m; i++) {
    let temp = [];
    grid.push(temp);
  }

  for (let i = 0; i < m; i++) {
    grid[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    grid[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let z = 1; z < n; z++) {
      grid[i][z] = grid[i][z - 1] + grid[i - 1][z];
    }
  }
  return grid[m - 1][n - 1];
};
