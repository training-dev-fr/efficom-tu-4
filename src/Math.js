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

const executeExpression = (expression) => {
    let sumExpression = expression.match(/([0-9]*)\+([0-9]*)/);
    if(sumExpression !== null){
        return sum(parseInt(sumExpression[1]),parseInt(sumExpression[2]));
    }
    let subExpression = expression.match(/([0-9]*)\-([0-9]*)/);
    if(subExpression !== null){
        return substract(parseInt(subExpression[1]),parseInt(subExpression[2]));
    }
    let mulExpression = expression.match(/([0-9]*)\*([0-9]*)/);
    if(mulExpression !== null){
        return multiply(parseInt(mulExpression[1]),parseInt(mulExpression[2]));
    }
    let divExpression = expression.match(/([0-9]*)\/([0-9]*)/);
    if(divExpression !== null){
        return divide(parseInt(divExpression[1]),parseInt(divExpression[2]));
    }
    return new Error("expression parse failed")
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


module.exports = { sum, substract,multiply, divide, checkNumber };
