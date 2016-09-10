const reverseWords = str =>
str.split(' ')
.reverse()
.join(' ')
.replace(/\s+/g, ' ')
.replace(/^\s+|\s+$/g,'');
