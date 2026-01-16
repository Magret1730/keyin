// Gets command line arguments
const userArguments = process.argv.slice(2);

/**
 * Generates a random password based on the provided options.
 *
 * @param {number} length - The desired length of the password.
 * @param {boolean} useLowercase - Whether to include lowercase letters.
 * @param {boolean} useNumbers - Whether to include numbers.
 * @returns {string} The generated password.
 */
function generatePassword(length, useLowercase, useNumbers) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';

    let characterPool = '';
    if (useLowercase) characterPool += lowercaseChars;
    if (useNumbers) characterPool += numberChars;

    if (characterPool === '') {
        return { disable: true };
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }
    return password;
}

// Handles command-line arguments
function parseArguments(userArguments) {
    if (userArguments.includes('--help')) {
        return { help: true };
    }

    // Default values
    let length = 8;
    let useLowercase = true;
    let useNumbers = false;

    // Handles length
    if (userArguments.includes('--length')) {
        const index = userArguments.indexOf('--length');
        const value = userArguments[index + 1];
        if (!value || value.startsWith('--')) {
            length = 8;
        } else {
            length = parseInt(value, 10);
            if (isNaN(length) || length <= 0) {
                console.error('--length flag must be a positive number.');
                process.exit(1);
            }
        }
    }

    if (userArguments.includes('--lowercase')) useLowercase = true;
    if (userArguments.includes('--disable-lowercase')) useLowercase = false;
    if (userArguments.includes('--numbers')) useNumbers = true;

    // Ensure at least one character type
    if (!useLowercase && !useNumbers) {
        return { disable: true };
    }

    return { length, useLowercase, useNumbers };
}

// Main execution
if (require.main === module) {
    const options = parseArguments(process.argv.slice(2));

    if (options.help) {
        console.log(`
            Usage: node passwordGenerator.js [options]
            Options:
                --help               Display this help message
                --length <number>    Specify the length of the password (default: 8)
                --lowercase          Include lowercase letters in the password (default: true)
                --disable-lowercase  Exclude lowercase letters from the password
                --numbers            Include numbers in the password (default: false)
        `);
        process.exit(0);
    }
    if (options.disable) {
        console.log(`
            At least one character type must be selected (lowercase or numbers). Use --help for more information.
        `);
        process.exit(1);
    }

    const password = generatePassword(options.length, options.useLowercase, options.useNumbers);
    console.log(password);
}

module.exports = { generatePassword, parseArguments };