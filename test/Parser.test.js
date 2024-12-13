const {executeExpression} = require("./../src/parser.js")
const {sum} = require("./../src/Math.js");

jest.mock('./../src/math.js',() => ({
    sum: jest.fn(() => 25)
}));


describe("When i try to parse an expression,",() => {
    test("With a sum expression, then i should call the sum function",() => {


        let result = executeExpression("20+5");
        expect(sum).toHaveBeenCalledTimes(1);
    });
})