const isValidBST = (root, min, max) => (root === null) ?
  true : ((min !== null && root.val <= min) || (max !== null && root.val >= max)) ?
  false : isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
