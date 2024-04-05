const array = [1, 1, 1, 1, 1, 2, 2];

let target = 1;
function Count(arr, target) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
      res++;
    }
  }
  console.log(res);
}

Count(array, 1);
