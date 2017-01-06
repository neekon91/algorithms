const searchMatrix = (matrix, target) => {
  for(let i = 0; i < matrix.length; i++){
    if(matrix[i][matrix[i].length - 1] >= target){
      if(matrix[i][matrix[i].length - 1] === target){
        return true;
      } else if(matrix[i][0] === target){
        return true;
      }
      for(let z = 1; z < matrix[i].length; z++){
        if(target === matrix[i][z]){
            return true;
        }
      }
    }
  }
  return false;
};
