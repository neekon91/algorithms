const selectionSort = nums => {
  nums.forEach((val, i)=>{
    let min = i;
    for(let z = i + 1; z < nums.length; z++) {
      if(nums[z] < nums[min]) {
        min = z;
      }
    }
    if(i !== min) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  })
  return nums;
}

const nums = [9, 2, 5, 11, 6, 4, 12, 3, 7, 10, 1, 8];
console.log(selectionSort(nums)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
