// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
var arr = [0, 0, 1]
var count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        count++
        arr.splice(i, 1)
        i--;
    }
}
while (count--)
    arr.push(0)
console.log(arr)