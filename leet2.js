var J = 'aA', count = 0;
var S = 'aAAbbbb'
var arr = J.split("")
var brr = S.split("")
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < brr.length; j++) {
        if (arr[i] === brr[j]) {
            count++;
        }
    }
}
console.log(count)