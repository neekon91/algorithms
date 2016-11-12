const spiralOrder = (matrix, output = []) => {

  if(matrix.length === 0 || matrix === null || matrix[0].length === 0) {
  //filter undefined
    return output
      .reduce((arr, elem) => elem !== undefined ? [...arr, elem]: arr, []);
  }
  //add top row || get elements on the right
  output = output.concat(matrix.shift())
    .concat(matrix.reduce((arr, rightElements)=>
    arr = [...arr, rightElements.pop()], []));

  if (matrix.length === 0) {
    return output;
  }
  //get the bottom row || reverse it || get the elements on the left
  output = output.concat(matrix.pop().reverse())
    .concat(matrix.reduceRight((arr, leftElements)=>
      arr = [...arr, leftElements.shift()], []));

  return spiralOrder(matrix, output);
}
