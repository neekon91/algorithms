const spiralOrder = (matrix, output) =>
  matrix.length ? spiralOrder(output ?
    (matrix = matrix[0].reduceRight((memo, _, i)=>[...memo, matrix.map(row=>row[i])], []))
    : matrix, (output || []).concat(matrix.shift())
  ) : output;

// second solution
// =================
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

// third solution
// =================

const spiralOrder = (matrix, output)=>
  matrix.length ? spiralOrder( output ?
  (matrix = matrix[0].map((_,i)=>matrix.map(row=>row[i])).reverse())
  : matrix,(output||[]).concat(matrix.shift())
): output;
// [
//   [1,2,3],
//   [6,9,8],
//   [7,4,5]
// ]


console.log(spiralOrder([
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
 [10, 11,12],
 [13, 14,15]
]))
// console.log(spiralOrder([
//   [ 1,  2,  3,  4,  5 ],
//   [ 6,  7,  8,  9,  10 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 16, 17, 18, 19, 20 ],
//   [ 21, 22, 23, 24, 25 ]
// ]))
// [
//   [ 1, 2, 3],
//   [6, 9, 12],
//   [11, 10, 7],
//   [4, 5, 8 ]
// ]
// let matrix = [ [ 1,  2,  3,  4,  5 ],
//                [ 6,  7,  8,  9,  10 ],
//                [ 11, 12, 13, 14, 15 ],
//                [ 16, 17, 18, 19, 20 ],
//                [ 21, 22, 23, 24, 25 ] ];
// console.log(matrix[0].map((_,i)=>matrix.reduceRight((memo, row)=>[...memo, row[i]],[])).reverse())
// let matrix = [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ],
//  [10, 11,12],
//  [13, 14,15]
// ];
// console.log(matrix.reduceRight((memo, _, i)=>
//     [...memo, matrix.map(row=>row[i])], []));
// console.log(matrix[0].map((_,i)=>matrix.map(row=>row[i])))
