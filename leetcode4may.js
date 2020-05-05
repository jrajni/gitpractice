var s = "loveleetcode"
var set = new Set(s)
// console.log(set)
var arr = s.split("")
// console.log(arr)
var count = 0;
for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (set[i] === arr[j]) {
            count++;
        }
        console.log(count)

    }
    console.log(count)
    //    if(count===1){ ;break;}
    // else{count=0}
}
