const trap = (height, lMax = 0, rMax = 0, left = 0, right = height.length - 1, output = 0) => {

  while (left <= right) {
    height[left] <= height[right] ?
      height[left] > lMax ? lMax = height[left++]: output += lMax - height[left++] :
      height[right] > rMax ? rMax = height[right--]: output += rMax - height[right--];
  }
  return output;
};
