const maximumGap = nums => {
  let solution = 0;
  const srt = nums.sort((a,b)=> a - b);
  if(nums.length < 2){
      return 0;
  }
  srt.forEach( (val, i)=>{
    if(srt[i+1] - val > solution){
      solution = srt[i+1] - val;
    }
  });
  return solution;
};
