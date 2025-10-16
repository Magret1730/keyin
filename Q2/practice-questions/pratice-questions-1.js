// Question 1
const label = "Keyincollege";
const tld = "ca";

const domainName = `${label}.${tld}`;
console.log(`Domain Name: ${domainName}`);

// Question 2
const isKeyin = domainName === "Keyincollege.ca";
console.log(`Is Keyin College Domain: ${isKeyin}`);

// Question 3
const isNotKeyin = !isKeyin;
console.log(`Suspicious Domain Detected: ${isNotKeyin}`);

// Question 4
const byte1 = 23;
const byte2 = 223;
const byte3 = 30;
const byte4 = 230;

const ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
console.log(`Generated IP Address: ${ipAddress}`);

// Question 5
console.log("Prepare the output to display:")
let varNum = 12;
for (let i = 1; i <= 10; i++) {
    console.log(`${varNum} * ${i} = ${varNum * i}`);
}

// Question 6
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(`Odd: ${i}`);
    } else {
        console.log(`Even: ${i}`);
    }
}

// Question 7
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`Sum of Even Weights: ${sum}`);

// Question 8
let allocationSum = 0;
let varAllocation = 28;
for (let i = 1; i <= (varAllocation / 2); i++) {
    if (varAllocation % i === 0) {
        allocationSum += i;
    }
}
if (allocationSum === varAllocation) {
    console.log(`${varAllocation} is a Perfect Allocation: true`);
} else {
    console.log(`${varAllocation} is a Perfect Allocation: false`);
}

// Question 9
let nums = [];
const productId = 32;
for (let i = 2; i < productId; i++) {
    if (productId % i === 0 ) {
        nums.push(i);
    } 
}
if (nums.length === 0) {
    console.log(`Product ID ${productId} is Prime: true`);
} else {
    console.log(`Product ID ${productId} is Prime: false`);
}