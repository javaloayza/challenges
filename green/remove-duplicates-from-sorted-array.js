/**
 * @param {number[]} nums
 * @return {number}
 javascript - remove duplicates sorted
 */
var removeDuplicates = function (nums) {
    let p = 0;
    nums.forEach((n) => n > nums[p] && (nums[++p] = n));
    return p + 1;
};
