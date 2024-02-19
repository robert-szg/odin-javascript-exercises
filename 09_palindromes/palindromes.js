const palindromes = function (string) {
    let reg = /[\W_]/g;
    string = string.toLowerCase();
    string = string.replace(reg, "");
    let reversed = string.split("").reverse().join("");
    return reversed == string;
};

// Do not edit below this line
module.exports = palindromes;
