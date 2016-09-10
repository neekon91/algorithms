const lengthOfLastWord = s => {
  let arr = s.split(' ');
  var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        if (arr[i] !== '' && arr[i] !== ' ') {
            return arr[i].length;
        }
    }
    return 0;
};
