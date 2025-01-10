const Complexite = require("../src/Complexite");
const { generatePassword } = require("../src/password");

describe("When i try to generate a password",() => {
    test("With length greater or equal to 6, and all complexity",() => {
        let complexity = new Complexite(true,true,true,true);
        let password = generatePassword(8,complexity);
        expect...
    })
})