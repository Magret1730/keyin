// for (let i = 10; i > 0; i--) {
//     console.log("Hello", i);
// }

// let k = 0;
// for (let i=0; i < 5; i++) {
//     // console.log("Hello", i);
//     // console.log(`i`);
//     for (let j =0; j < 5; j++) {
//         // console.log("Hello", i, j);
//         console.log(`I: ${i}, J: ${j}`);
//         k++;
//     }
//     console.log(`K: ${k}`);
// }

// let k = 0;
// for (let i=0; i < 5; i++) {
//     // console.log("Hello", i);
//     // console.log(`i`);
//     for (let j=i; j < 5; j++) {
//         // console.log("Hello", i, j);
//         console.log(`I: ${i}, J: ${j}`);
//         k++;
//     }
//     console.log(`K: ${k}`);
// }

for (let i=0; i < 5; i++) {
    let pattern = "";
    for (let j=i; j < 5; j++) {
        pattern =+ '*';
    }
    console.log(pattern);
}

