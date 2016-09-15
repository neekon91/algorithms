const invertTree = root => {
    if(root !== null){
    let hold = root.left;
    root.left = root.right;
    root.right = hold;

    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};
