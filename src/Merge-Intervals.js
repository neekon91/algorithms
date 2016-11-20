const merge = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);
  let output = [];

  if(intervals.length) output = [...output, intervals[0]];

  for(let i = 1; i < intervals.length; i++) {
    let last = output.pop();
    if(intervals[i].start > last.end) {
      output = [...output, last, intervals[i]];
    } else {
      last.end = Math.max(last.end, intervals[i].end);
      output = [...output, last];
    }
  }

  return output;
};
