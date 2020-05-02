// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
var arr = [4, 1, 2, 1, 2]
var count = 0, num = 0;
arr.sort()
var lastindex = arr[arr.length - 1]
for (let i = 0; i < arr.length - 1; i++) {
    console.log("i", i)
    if (arr[i] === arr[i + 1]) { i = i + 1; }
    else { num = arr[i]; count++; }
}
if (!count) { num = lastindex }
console.log(num)
