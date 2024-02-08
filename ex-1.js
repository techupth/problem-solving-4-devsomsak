function sumArray(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
//Mynote
//    function sumArray(nums) {
//     return nums.reduce((acc, curr) => acc + curr, 0);
// }

function pivotIndex(nums) {
  let total = sumArray(nums);
  let leftSum = 0;

  for (let i = 0; i < 4; i++) {
    if (leftSum === total - leftSum - nums[i]) {
      console.log(leftSum);
      return i;
    }
    leftSum += nums[i];
    console.log(leftSum);
  }

  return -1;
}

let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); // Output: 3
