const { generatePassword, parseArguments } = require("../passwordGenerator");

describe('generatePassword', () => {
    test('Generates the correct response when --help flag is used', () => {
        parseArguments(['--help']);
        expect(`
            Usage: node passwordGenerator.js [options]
            Options:
                --help               Display this help message
                --length <number>    Specify the length of the password (default: 8)
                --lowercase          Include lowercase letters in the password (default: true)
                --disable-lowercase  Exclude lowercase letters from the password
                --numbers            Include numbers in the password (default: false)
        `).toBeDefined();
    });

    test('The generated password is of the correct length', () => {
        const { length, useLowercase, useNumbers } = parseArguments(['--length', '10']);
        const password = generatePassword(length, useLowercase, useNumbers);
        expect(password.length).toBe(10);
    });

    test("Password length defaults to 8 when no length value is specified", () => {
        const { length, useLowercase, useNumbers } = parseArguments(['--length']);
        const password = generatePassword(length, useLowercase, useNumbers);
        expect(password.length).toBe(8);
    });

    test('Password contains lowercase letters when --lowercase flag is used', () => {
        const { length, useLowercase, useNumbers } = parseArguments(['--lowercase']);
        const password = generatePassword(length, useLowercase, useNumbers);
        const containsLowercase = /[a-z]/.test(password);
        expect(containsLowercase).toBe(true);
    });

    test('Password does not contain lowercase letters when --disable-lowercase flag is used', () => {
        const { length, useLowercase, useNumbers } = parseArguments(['--numbers', '--disable-lowercase']);
        const password = generatePassword(length, useLowercase, useNumbers);
        const containsLowercase = /[a-z]/.test(password);
        expect(containsLowercase).toBe(false);
    });

    test('Password contains lowercase when --lowercase flag is not specified', () => {
        const { length, useLowercase, useNumbers } = parseArguments([]);
        const password = generatePassword(length, useLowercase, useNumbers);
        const containsLowercase = /[a-z]/.test(password);
        expect(containsLowercase).toBe(true);
    });

    test('Password returns correct error message when no character types are selected with --disable-lowercase', () => {
        parseArguments(['--disable-lowercase']);
        expect(`
            At least one character type must be selected (lowercase or numbers). Use --help for more information.
        `).toBeDefined();
    });

    test('Password contains numbers when --numbers flag is used', () => {
        const { length, useLowercase, useNumbers } = parseArguments(['--numbers']);
        const password = generatePassword(length, useLowercase, useNumbers);
        const containsNumbers = /[0-9]/.test(password);
        expect(containsNumbers).toBe(true);
    });

    test('Password does not contain numbers when --numbers flag is not used', () => {
        const { length, useLowercase, useNumbers } = parseArguments([]);
        const password = generatePassword(length, useLowercase, useNumbers);
        const containsNumbers = /[0-9]/.test(password);
        expect(containsNumbers).toBe(false);
    });

    test('Password contains both lowercase letters and numbers when both flags are used', () => {
        const { length, useLowercase, useNumbers } = parseArguments(['--lowercase', '--numbers']);
        const password = generatePassword(length, useLowercase, useNumbers);
        const containsLowercase = /[a-z]/.test(password);
        const containsNumbers = /[0-9]/.test(password);
        expect(containsLowercase).toBe(true);
        expect(containsNumbers).toBe(true);
    });
})