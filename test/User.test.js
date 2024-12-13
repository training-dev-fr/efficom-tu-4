const { auth } = require("./../src/user.js");

describe("When i try to authentified", () => {
    test("and the api server does not respond, then i should have an error", () => {

    });
    test("and the api return an ok response, then i should store data in localstorage", () => {
        global.fetch = jest.fn();
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                firstname: "Aurélien",
                lastname: "Vaast",
                login: "avaast"
            }),
            ok: true
        });

    });
    test("and the api return an ko response, then i should have an error", () => {

    });
})
