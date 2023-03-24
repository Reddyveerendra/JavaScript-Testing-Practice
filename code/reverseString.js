function reverseString(str) {
    str = str.split("");
    str.reverse();
    str = str.join("")
    return str;
}
module.exports = reverseString 