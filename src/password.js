const Complexite = require("./Complexite");

function generatePassword(length, complexite) {
    if (typeof length !== "number") {
        throw new Error("Lenght must be 6 or greater");
    }
    if (length < 6) {
        throw new Error("Lenght must be 6 or greater");
    }
    if (!(complexite instanceof Complexite)) {
        throw new Error("you must pick at least 2 complexity");
    }
    let count = 0;
    Object.entries(complexite).forEach(property => {
        if (property[1]) {
            ++count;
        }
    });
    if (count < 2) {
        throw new Error("you must pick at least 2 complexity");
    }
    let lower = "azertyuiopqsdfghjklmwxcvbn";
    let upper = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    let number = "0123456789";
    let special = "$%#*";
    let fullChar = "";

    let password = "";
    if (complexite.special) {
        password += special.charAt(Math.floor(Math.random() * special.length));
        fullChar += special;
    }
    if (complexite.number) {
        password += number.charAt(Math.floor(Math.random() * number.length));
        fullChar += number;
    }
    if (complexite.upperCase) {
        password += upper.charAt(Math.floor(Math.random() * upper.length));
        fullChar += upper;
    }
    if (complexite.lowerCase) {
        password += lower.charAt(Math.floor(Math.random() * lower.length));
        fullChar += lower;
    }
    let currentLength = password.length;
    for(let i=0; i< length - currentLength;i++){
        password += fullChar.charAt(Math.floor(Math.random() * fullChar.length));
    }
    return password;
}

module.exports = { generatePassword };