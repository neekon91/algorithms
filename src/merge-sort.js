const mergeSort = nums =>
  (nums.length < 2) ? nums :
  merge(
    nums.slice(0, Math.floor(nums.length / 2)),
    nums.slice(Math.floor(nums.length / 2))
  )

const merge = (left , right, output = []) => {
  while(left.length && right.length){
    output.push(right[0] > left[0] ? left.shift(): rigth.shift())
  }
  return output;
}
