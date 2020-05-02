// Given an integer array arr, count element x such that x + 1 is also in arr.
var arr = [1, 1, 2, 2]
funto = async (arr) => {
    var count = 0, newvar = 0, final = 0;
    var set = new Set(arr)
    var brr = Array.from(set)
    brr.sort()
    for (let iterator in brr) {
        for (let i = 0; i < arr.length; i++) {
            if (brr[iterator] + 1 === arr[i]) {
                count++;
            }
            if (brr[iterator] === arr[i]) {
                newvar++;
            }

        }
        var dif = Math.min(count, newvar)
        final += dif
        console.log(final)
        count = 0, newvar = 0
    }
};
funto(arr)