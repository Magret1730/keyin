const {  getRandomGreeting } = require("../../utils/greetingGenerator");

describe("Tests for getRandomGreeting", () => {
    test("Verify a valid greeting is returned", () => {
        const greeting = getRandomGreeting();

        expect(getRandomGreeting()).toBeTruthy();
        expect(greeting.length).toBeGreaterThanOrEqual(1);
    });
});