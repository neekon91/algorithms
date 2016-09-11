const search = (nums, target) => {
  let right = nums.length - 1,
  left = 0;

  if (nums[right] === target || (left === right && nums[right] === target))
    return right;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target)
      return mid;
     else if (nums[left] > nums[mid])
      (nums[mid] <= target && nums[right] > target) ? left = mid +1 : right = mid -1;
     else
      (nums[mid] > target && nums[left] <= target) ? right = mid -1 : left = mid +1;
  }
  return -1;
};
