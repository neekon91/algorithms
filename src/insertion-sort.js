const insertionSort = nums => {
  for(let i = 1; i < nums.length; i++){
    for(let z = 0; z < i; z++){
      if(nums[i] < nums[z]){
        [nums[z], nums[i]] = [nums[i], nums[z]]
      }
    }
  }
  return nums;
}

console.log(insertionSort([3,5,6,3,3,1]))
