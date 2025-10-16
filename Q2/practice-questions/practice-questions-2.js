// Question 1
function calculateArea(r) {
    let Area = 3.14 * r * r;
    console.log(Area);
}

calculateArea(4);

// Question 2
function roll(sides = 6) {
    let x = Math.floor(Math.random() * sides) + 1;
    console.log(x)
}
roll();
roll(5);

// Question 3
function convert(C) {
    let Farenheit = (C * (9 / 5 ) + 32);

    console.log(`${Farenheit} F`);
}
convert(0);

// Question 4
function convert(value, temp) {
    if (temp === "F") {
        let Farenheit = (value * (9 / 5 ) + 32);

        console.log(`${Farenheit}F`);
    } else if (temp === "C") {
        let Celsius = ((value - 32) * 5) / 9;

        console.log(`${Celsius}C`)

    }
}
convert(122, "F");
convert(0, "C");

// Question 5
function isUnder50(...values) {
    if (values.length < 50) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isUnder50(4, 7, 8);
isUnder50(1, 2, 6, 7, 3,33,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,44,4,44,4,4,4,4,4,4,4,4,4,4,4,4,44,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4);

// Question 6
function Sum(...values) {
    let total = 0;
    values.forEach(value => {
        total += value;
    });
    console.log(total)
}
Sum(5, 8, 9, 3, 25);

// Question 7
function isMultipleOfThree(...values) {
    let ans = true;
    values.forEach(value => {
        if (value % 3 === 0) {
            ans = true;
        } else {
            ans = false;
        };
    });
    console.log(ans);
}
isMultipleOfThree(6);
isMultipleOfThree(601);

// Question 8
function applyDiscount(total, discount) {
    if (discount === undefined) {
        console.log(total);
    } else {
        let discountedPrice = total - (total * (discount / 100));
        console.log(discountedPrice);
    }
}

applyDiscount(100);
applyDiscount(100, 10);

// Question 9
function formatTime(secs) {
    const days = Math.floor(secs / 86400);
    secs %= 86400;

    const hours = Math.floor(secs / 3600);
    secs %= 3600;

    const minutes = Math.floor(secs / 60);
    secs %= 60;

    console.log(`${days} Day, ${hours} Hour, ${minutes} Minute`);
}
formatTime(7265);

// Question 10
function formatTime(secs) {
    const days = Math.floor(secs / 86400);
    secs %= 86400;

    const hours = Math.floor(secs / 3600);
    secs %= 3600;

    const minutes = Math.floor(secs / 60);
    secs %= 60;

    let result = [];
    if (days > 0) {
        if (days === 1) {
            result.push(`${days} Day`);
        } else {
            result.push(`${days} Days`);
        }
    }
    
    if (hours > 0) {
        if (hours === 1) {
            result.push(`${hours} Hour`);
        } else {
            result.push(`${hours} Hours`);
        }
    }
    
    if (minutes > 0) {
        if (minutes === 1) {
            result.push(`${minutes} Minute`);
        } else {
            result.push(`${minutes} Minutes`);
        }
    }
    
    if (secs > 0) {
        if (secs === 1) {
            result.push(`${secs} Second`);
        } else {
            result.push(`${secs} Seconds`);
        }
    }

    console.log(result.join(', '));
}
formatTime(7265);
formatTime(60);
formatTime(6);
formatTime(90061);
