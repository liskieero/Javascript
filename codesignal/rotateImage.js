function rotateImage(a) {
  const N = a[0].length - 1;
  const ans = a.map((rowArr, i) => {
    return rowArr.map((elem, j) => {
      return a[N-j][i];
    })
  })
  return ans;
}

let a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]];

rotateImage(a);




////////////////////////////////////////////////////////////////////////////////
// let nRow = a[0].length;
// let obj = {};
//
// for (let i = 0; i < nRow; i++) {
//   a.map(arr => {
//     obj[i] = arr[i];
//     return obj;
//   });
// }
