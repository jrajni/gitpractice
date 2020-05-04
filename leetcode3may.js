// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
const input = "1";
const output = (input * 1).toString(2);
// console.log(output);
// console.log(typeof(output))
var arr = output.split("")
// console.log(arr)
for (i = 0; i < arr.length; i++) {
    if (arr[i] === '1') { arr[i] = '0' } else { arr[i] = '1' }
}
var b = arr.join('')
// console.log(b)
// console.log(typeof(b))
var newx = parseInt(b, 2).toString(10);
console.log(newx)