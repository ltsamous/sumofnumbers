const testValues = [1, 2, 3];

function For(nums) {
  let value = 0;
  for (const num of nums) {
    value += num;
  }
  return value;
}

console.log(For(testValues));

function While(nums) {
  let i = 0;
  let value = 0;
  while (i < nums.length) {
    value += nums[i];
    i++;
  }
  return value;
}

console.log(While(testValues));

function recursive(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + recursive(nums.slice(1, nums.length));
}

console.log(recursive(testValues));

function underscore(nums) {
  let values = _.reduce(nums,function(memo, num) {return memo + num; }, 0);
  return values;
}
console.log(underscore(testValues));
