function analyzeArray(arr) {
    arr = {
        average: arr.reduce(function (x, y) { return x + y }, 0) / arr.length,
        length: arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
    return arr;
}
module.exports = analyzeArray 