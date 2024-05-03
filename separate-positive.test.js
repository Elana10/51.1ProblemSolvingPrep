
function separatePositive(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right){
      if(nums[left] < 0 && nums[right] > 0){
          let temp = nums[left]
          nums[left] = nums[right]
          nums[right] = temp;

          left += 1;
          right -= 1;
      } else {
          if (nums[left] > 0) left += 1;
          else right -=1;
      }
  }
  return nums;
}


describe("separatePositive", function() {
  it("does nothing to arrays of all positive numbers", function() {
    var arr = [1, 2, 3];
    expect(separatePositive(arr)).toBe(arr);
  });

  it("does nothing to arrays of all negative numbers", function() {
    var arr = [-1, -2, -3];
    expect(separatePositive(arr)).toBe(arr);
  });

  it("moves positives to the left and negatives to the right", function() {
    var arr = [2, -1, -3, 6, -8, 10];
    separatePositive(arr);

    expect(arr[0] > 0).toBe(true);
    expect(arr[1] > 0).toBe(true);
    expect(arr[2] > 0).toBe(true);
    expect(arr[3] < 0).toBe(true);
    expect(arr[3] < 0).toBe(true);
    expect(arr[3] < 0).toBe(true);

    var arr2 = [5, 10, -15, 20, 25];
    separatePositive(arr2);

    expect(arr2[0] > 0).toBe(true);
    expect(arr2[1] > 0).toBe(true);
    expect(arr2[2] > 0).toBe(true);
    expect(arr2[3] > 0).toBe(true);
    expect(arr2[4]).toBe(-15);
  });
});
