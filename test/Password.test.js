const Complexite = require("../src/Complexite");
const { generatePassword } = require("../src/password");

describe("When i try to generate a password",() => {
    test("With length not a number, then i should have an error",() => {
        let complexity = new Complexite(true,true,true,true);
        expect(() => generatePassword("test",complexity)).toThrow("Lenght must be 6 or greater");
    });

    test("With length lower than 6, then i should have an error",() => {
        let complexity = new Complexite(true,true,true,true);
        expect(() => generatePassword(3,complexity)).toThrow("Lenght must be 6 or greater");
    });

    test("With length greater or equal to 6, and only one complexity, then i should have an error",() => {
        let complexity = new Complexite(true,false,false,false);
        expect(() => generatePassword(8,complexity)).toThrow("you must pick at least 2 complexity");
    });

    test("With length greater or equal to 6, and not a complexity Object, then i should have an error",() => {
        expect(() => generatePassword(8,{lower:true,upper:false,number:false,special:false})).toThrow("you must pick at least 2 complexity");
    });

    test("With length greater or equal to 6, and lower and upper complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(true,true,false,false);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[a-zA-Z]{6,}/);
        expect(password).not.toMatch(/[0-9]{1,}/);
        expect(password).not.toMatch(/[$%#*]{1,}/);
    });

    test("With length greater or equal to 6, and lower and number complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(true,false,true,false);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[a-z0-9]{6,}/);
        expect(password).toMatch(/[0-9]+/);
        expect(password).toMatch(/[a-z]+/);
        expect(password).not.toMatch(/[A-Z]{1,}/);
        expect(password).not.toMatch(/[$%#*]{1,}/);
    });

    test("With length greater or equal to 6, and lower and special complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(true,false,false,true);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[a-z$%#*]{6,}/);
        expect(password).toMatch(/[$%#*]+/);
        expect(password).toMatch(/[a-z]+/);
        expect(password).not.toMatch(/[0-9]{1,}/);
        expect(password).not.toMatch(/[A-Z]{1,}/);
    });

    test("With length greater or equal to 6, and upper and number complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(false,true,true,false);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[A-Z0-9]{6,}/);
        expect(password).toMatch(/[A-Z]+/);
        expect(password).toMatch(/[0-9]+/);
        expect(password).not.toMatch(/[a-z]{1,}/);
        expect(password).not.toMatch(/[$%#*]{1,}/);
    });

    test("With length greater or equal to 6, and upper and special complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(false,true,false,true);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[A-Z$%#*]{6,}/);
        expect(password).toMatch(/[A-Z]+/);
        expect(password).toMatch(/[$%#*]+/);
        expect(password).not.toMatch(/[0-9]{1,}/);
        expect(password).not.toMatch(/[a-z]{1,}/);
    });

    test("With length greater or equal to 6, and number and special complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(false,false,true,true);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[0-9$%#*]{6,}/);
        expect(password).toMatch(/[0-9]+/);
        expect(password).toMatch(/[$%#*]+/);
        expect(password).not.toMatch(/[a-z]{1,}/);
        expect(password).not.toMatch(/[A-Z]{1,}/);
    });

    test("With length greater or equal to 6, and lower, upper and number complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(true,true,true,false);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[a-zA-Z0-9]{6,}/);
        expect(password).toMatch(/[a-z]+/);
        expect(password).toMatch(/[A-Z]+/);
        expect(password).toMatch(/[0-9]+/);
        expect(password).not.toMatch(/[$%#*]{1,}/);
    });

    test("With length greater or equal to 6, and lower, upper and special complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(true,true,false,true);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[a-zA-Z$%#*]{6,}/);
        expect(password).toMatch(/[a-z]+/);
        expect(password).toMatch(/[A-Z]+/);
        expect(password).toMatch(/[$%#*]+/);
        expect(password).not.toMatch(/[0-9]{1,}/);
    });

    test("With length greater or equal to 6, and lower, number and special complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(true,false,true,true);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[a-z0-9$%#*]{6,}/);
        expect(password).toMatch(/[a-z]+/);
        expect(password).toMatch(/[0-9]+/);
        expect(password).toMatch(/[$%#*]+/);
        expect(password).not.toMatch(/[A-Z]{1,}/);
    });

    test("With length greater or equal to 6, and number, upper and special complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(false,true,true,true);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[0-9A-Z$%#*]{6,}/);
        expect(password).toMatch(/[A-Z]+/);
        expect(password).toMatch(/[0-9]+/);
        expect(password).toMatch(/[$%#*]+/);
        expect(password).not.toMatch(/[a-z]{1,}/);
    });

    test("With length greater or equal to 6, and lower,upper,number and special complexity, then i should have a password with only requested char",() => {
        let complexity = new Complexite(true,true,true,true);
        let password = generatePassword(8,complexity);
        expect(password).toMatch(/[a-zA-Z0-9$%#*]{6,}/);
        expect(password).toMatch(/[a-z]+/);
        expect(password).toMatch(/[A-Z]+/);
        expect(password).toMatch(/[0-9]+/);
        expect(password).toMatch(/[$%#*]+/);
    });
})