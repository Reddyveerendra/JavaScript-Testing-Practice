function caesarCipher(str, x) {
    let alpha = "abcdefghijklmnopqrstuvxyz".split("");
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        let s = str[i]
        str[i] = alpha[(alpha.indexOf(s) + x) % 26]
    }
    return str.join("")
}
module.exports = caesarCipher;