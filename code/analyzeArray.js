function analyzeArray(arr) {
    arr = {
        average: arr.reduce(function (x, y) { return x + y }, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    return arr;
}
module.exports = analyzeArray 