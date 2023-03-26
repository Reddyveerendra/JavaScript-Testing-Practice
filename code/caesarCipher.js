function caesarCipher(str, key) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    let c = ""
    str = str.split("");
    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            c += " ";
            continue
        }
        else if (num.includes(str[i])) {
            c += str[i];
            continue
        }
        c += alpha[((alpha.indexOf(str[i])) + key) % 26]
    }
    return c
}
module.exports = caesarCipher;