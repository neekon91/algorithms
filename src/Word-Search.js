const exist = (board, word) => {
  const search = (i, z, len) => {
    if (len === word.length)
      return true;
    if (0 <= i &&  i < board.length && board[i][z] === word[len]) {
      let temp = board[i][z];
      board[i][z] = true;
      if (search(i + 1, z, len +1) || search(i, z + 1, len +1) || search(i - 1, z, len +1) || search(i, z - 1, len +1)) {
        return true;
      }
      board[i][z] = temp;
    }
    return false;
  };
  
  for (let i = 0; i < board.length; i++) {
    for (let z = 0; z < board[0].length; z++) {
      if (search(i, z, 0))
        return true;
    }
  }
  return false;
};
