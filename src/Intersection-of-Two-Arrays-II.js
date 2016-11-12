const intersect = (nums1, nums2, i, output = []) => {
  nums1.forEach(num=>{
    if(nums2.indexOf(num) > -1 ){
      output = [...output, num];
      i = nums2.indexOf(num);
      nums2.splice(i, 1);
    }
  });
  return output;
};
