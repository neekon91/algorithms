const maximalSquare = mat => {
  let outPut = 0;
  mat.map((_, i)=> {
    mat[i].map((_, z)=> {
      if (z !== 0 && i !== 0 && mat[i][z] === '1') {
          mat[i][z] = Math.min( mat[i-1][z-1], mat[i][z-1], mat[i-1][z]) + 1;
      }
      outPut = Math.max(outPut, mat[i][z]);
    });
  });
  return (outPut * outPut);
};
