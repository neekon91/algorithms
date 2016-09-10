const lengthOfLongestSubstring = s => {
    let obj = {},
    len = 0,
    max = 0,
    start = 0,
    char;
    if(s === null || s.length === 0){
      return 0;
    }
    for(let i = start; i < s.length; i++){
        char = s[i];
        if(obj[char] !== undefined && obj[char] >= start) {
            start = obj[char] + 1;
            len = i - start;
        }
        len++;
        if(len > max){
            max = len;
        }
        obj[char] = i;
    }
    return max;
};
