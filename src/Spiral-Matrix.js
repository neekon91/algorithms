const spiralOrder = (matrix, output = []) => {

  if(matrix.length === 0 || matrix === null || matrix[0].length === 0) {
    return output.reduce((arr, elem) => elem !== undefined ? [...arr, elem]: arr, []);
  }

  output = output.concat(matrix.shift())
    .concat(matrix.reduce((arr, rightElements)=>
    arr = [...arr, rightElements.pop()], []));

  if (matrix.length === 0) {
    return output;
  }
  
  output = output.concat(matrix.pop().reverse())
    .concat(matrix.reduceRight((arr, leftElements)=>
      arr = [...arr, leftElements.shift()], []));

  return spiralOrder(matrix, output);
}
