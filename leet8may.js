var obj = 0, obj2 = 0, arr = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], brr = []
for (let i = 0; i < arr.length - 1; i++) {
    obj = arr[i];
    obj2 = arr[i + 1];
    var x1 = obj[0];
    var y1 = obj[1];
    var x2 = obj2[0];
    var y2 = obj2[1];

    var m = (y2 - y1) / (x2 - x1);
    brr = [...brr, m]
}
var set = new Set(brr)
var crr = Array.from(set)
if (crr.length === 1) {
    return (true)
} else {
    return (false)
}
// y=mx