const Article = require("../src/Article");
const { calculateTotalPrice } = require("../src/Cart");

describe("When I try to calculate the total price of my cart", () => {
    test("with 3 items, then I should have the total price", () => {
        const item1 = new Article(1, 10, 2);
        const item2 = new Article(2, 15, 1);
        const item3 = new Article(3, 5, 3);
        let cart = [item1, item2, item3];
        const total = calculateTotalPrice(cart);
        expect(total).toBe(50);
    });

    test('with no items, I should have a total of 0', () => {
        let cart = [];
        const total = calculateTotalPrice(cart);
        expect(total).toBe(0);
    });

    test("without a cart, then I should get an error", () => {
        expect(() => calculateTotalPrice(undefined)).toThrow("There is no cart");
    });

    test('with invalid items in the cart, then I should get an error', () => {
        let cart = ["hello", "hi"];
        expect(() => calculateTotalPrice(cart)).toThrow("Cart contains invalid items");
        let cart2 = [{ id: 1, price: 5, quantity: 2, stock: 3 }];
        expect(() => calculateTotalPrice(cart2)).toThrow("Cart contains invalid items");
    });

    test("with 1 items with a negative price, then I should get an error", () => {
        const item1 = new Article(1, 10, 2);
        const item2 = new Article(2, -5, 1);
        const item3 = new Article(3, 5, 3);
        let cart = [item1, item2, item3];
        expect(() => calculateTotalPrice(cart)).toThrow("Price of item must be positive");
    });

    test("with an item having quantity 0 or negative, then I should get an error", () => {
        const item = new Article(1, 10, 0);
        let cart = [item];
        expect(() => calculateTotalPrice(cart)).toThrow("Item quantity must be positive");
    });

    test("If there is no items left in stock , then I should get an error", () => {
        const item1 = new Article(1, 10, 2);
        item1.stock = 0;
        let cart = [item1];
        expect(() => calculateTotalPrice(cart)).toThrow("The item is out of stock");
    });
    test("If there is no items left in stock , then I should get an error", () => {
        const item1 = new Article(1, 10, 5);
        let cart = [item1];
        expect(() => calculateTotalPrice(cart)).toThrow("There is not enough stock");
    });
});