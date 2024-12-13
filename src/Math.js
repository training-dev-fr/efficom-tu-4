const sum = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return new Error("veuillez saisir des nombres");
    }
    return a + b;
}

const substract = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return new Error("veuillez saisir des nombres");
    }
    return a - b;
}

const multiply = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return new Error("veuillez saisir des nombres");
    }
    return a * b;
}

const divide = (dividend, divisor) => {
    if (isNaN(dividend) || isNaN(divisor)) {
        return new Error("veuillez saisir des nombres");
    }
    if (divisor > 0) {
        return dividend / divisor;
    } else {
        return false
    }
}

function checkNumber(number) {
    if(isNaN(number)){
        throw new Error("pas un nombre");
    }
    let result = { integer: false, positiv: false, even: null };
    if (parseInt(number) === number) {
        result.integer = true;
    }
    if (number >= 0) {
        result.positiv = true;
    }
    if (result.integer) {
        if (number % 2 === 0) {
            result.even = true;
        } else {
            result.even = false;
        }
    }
    return result;
}


module.exports = { sum, substract,multiply, divide, checkNumber,executeExpression };
