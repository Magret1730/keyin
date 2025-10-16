// Week 3

// Question 1
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

console.log(reverseNumber(15243));

// Question 2
function alphabetize(str) {
    return str.split('').sort().join('');
}
console.log(alphabetize('keyincollege'));

// Question 3
function getFileExtension(filename) {
    const parts = filename.split(".");
    return parts[1];
}
console.log(getFileExtension('document.pdf'));

// Question 4
function getCurrentDate(format) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    switch (format) {
        case 'mm-dd-yyyy':
            return `${month}-${day}-${year}`;
        case 'mm/dd/yyyy':
            return `${month}/${day}/${year}`;
        case 'dd-mm-yyyy':
            return `${day}-${month}-${year}`;
        case 'dd/mm/yyyy':
            return `${day}/${month}/${year}`;
        default:
            return 'Invalid format';
    }
}
console.log(getCurrentDate('mm/dd/yyyy'));

// Question 5
function capitalize(str) {
    const firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + str.slice(1);
}
console.log(capitalize('keyin'));

// Question 6
function checkPeriod(str) {
    return str.includes('.') ? 'Contains period' : 'No period';
}
console.log(checkPeriod('hello.world'));

// Question 7
function putSuffix(num) {
    if (num === undefined) return '';
    
    const suffix = ['th', 'st', 'nd', 'rd'];
    const remainder = num % 100;

    const isTeen = remainder > 10 && remainder < 20;
    const lastDigit = num % 10;
    const selectedSuffix = isTeen ? 'th' : suffix[lastDigit] || 'th';

    return `${num}${selectedSuffix}`;
}
console.log(putSuffix(23));


// Week 4 – JavaScript: String Functions and Regular

// Question 1
function getHello(array) {
    let newArr = [];
    let regexStr = /hello/i

    for (let arr of array) {
        const filteredWord = regexStr.test(arr);
    
        if (filteredWord) {
            newArr.push(arr);
        }
    }

    return newArr;
}
console.log(getHello(["bye", "hello123", "newhello", "he20llo", "hello", "abchello", "xyzabc"]));



// 2. Replacing Numbers in a String
function replaceTen(str) {
    const regexStr = /10/g;

    if (str.includes('10')) {
        return str.replace(regexStr, 'Ten');
    }
}
console.log(replaceTen("There are 10 people in room number 10. Call all of the 10 people outside."));

// Question 3
function cleanUp(str) {
    return str
        .replace(/([.?!])\s+/g, '$1 ') // Replace double spaces after punctuation
        .replace(/"/g, "'") // Convert double quotes to single quotes
        .replace(/\s*\(\s*/g, ' (') // Remove unnecessary spaces before opening parenthesis
        .replace(/\s*\)\s*/g, ')'); // Remove unnecessary spaces after closing parenthesis
}
console.log(cleanUp('This        is a sentence. This is another. "A ( red ) dog arrived."'));



// Question 4
function fixPostalCode(postalCode) {
    postalCode = postalCode.trim().toUpperCase();
    if (!/^[A-Z]\d[A-Z] \d[A-Z]\d$/.test(postalCode)) {
        throw new Error('Invalid postal code format');
    }
    return postalCode;
}
console.log(fixPostalCode("M5W 1E6"));
// console.log(fixPostalCode("m5w1e6")); 



// Question 5
function toProvince(postalCode, useLongForm = false) {
    const formattedPostalCode = fixPostalCode(postalCode);
    const provinceMap = {
        'A': 'NL',
        'B': 'NS',
        'C': 'PE',
        'E': 'NB',
        'G': 'QC',
        'H': 'QC',
        'J': 'QC',
        'K': 'ON',
        'L': 'ON',
        'M': 'ON',
        'N': 'ON',
        'P': 'ON',
        'R': 'MB',
        'S': 'SK',
        'T': 'AB',
        'V': 'BC',
        'X': useLongForm ? "Northwest Territories" : "NT",
        'Y': useLongForm ? "Yukon" : "YT"
    };
    
    const firstChar = formattedPostalCode.charAt(0);
    return useLongForm ? provinceMap[firstChar] || "Unknown Province" : provinceMap[firstChar] || "Unknown";
}
console.log(toProvince("M5W 1E6"));



// Question 6
function checkFirstChar(str) {
    return /^[A-Z]/.test(str) ? "String's first character is uppercase" : "String's first character is not uppercase";
}
console.log(checkFirstChar("Keyin"));


// Question 7
function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
console.log(validEmail("bgtr@fghh.n"))


// Question 8
function myTrimFunction(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
console.log(myTrimFunction(" Keyin College "));


// Question 9
function validateHTML(tag) {
    const htmlTagRegex = /^<([a-zA-Z][a-zA-Z0-9]*)>(<\/\1>)?$/;
    return htmlTagRegex.test(tag);
}
console.log(validateHTML("<b>"));

