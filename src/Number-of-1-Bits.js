const hammingWeight = n =>
  [...n.toString(2)].filter(num => num === "1").length;
