const numIslands = grid => {
  let islands = 0;
  grid.map((_, i)=> grid[i].map((_, z)=>
      grid[i][z] === '1' ? convert(grid, i, z, islands++): _));
  return islands;
};

const convert = (grid, i, z) => {
  if(0 <= i &&  i < grid.length && grid[i][z] === '1') {
    grid[i][z] = '.';

    convert(grid, i - 1, z);
    convert(grid, i, z - 1);
    convert(grid, i, z + 1);
    convert(grid, i + 1, z);
  }
};
