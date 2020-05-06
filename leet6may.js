// var majorityElement = function(nums) {
var nums = [3, 2, 3]
nums.sort()
var set = new Set(nums)
var brr = Array.from(set)
var count = 0, s = 0, p = 0;
for (let i = 0; i < brr.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (brr[i] === nums[j])
            count++;
    }
    if (s < count) {
        s = count;
        p = brr[i];
        count = 0;
    }
}