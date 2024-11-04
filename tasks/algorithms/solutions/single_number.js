const singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;
    
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return nums[i];
    }
  }

  return null;
};

singleNumber([1, 2, 1]);
