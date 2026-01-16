#!/usr/bin/env node

// const { getCharacterCount, getSentenceCount, getWordCount, getParagraphCount } = require("./utilities");

// /**
//  * Prints the help message out to the console
//  */
// function printHelpMessage() {
//     console.log(`
//         Usage: node index.js [options] "text to analyze"
//         Options:
//             --characters, -c       Get the character count
//             --words, -w            Get the word count
//             --sentences, -s        Get the sentence count
//             --paragraphs, -p       Get the paragraph count
//             --help, -h             Show this help message
//         Example:
//             node index.js --characters --words "This is my test sentence."    
//     `);
// }

// /**
//  * Handles the arguments provided to the application by the user.
//  * 
//  * @param {string[]} userArguments The arguments provided by the user
//  */
// function handleArguments(userArguments) {
//     if (userArguments.length <= 1) {
//         printHelpMessage();
//         return;
//     }

//     // index.js --characters --sentences "This is my test sentence. This is another test sentence."

//     const userText = userArguments[userArguments.length - 1];
//     let textStatistics = {};

//     for (let i = 0; i < userArguments.length - 1; i++) {
//         switch (userArguments[i]) {
//             case '--characters':
//             case '-c':
//                 textStatistics.characterCount = getCharacterCount(userText);
//                 break;
//             case '--words':
//             case '-w':
//                 textStatistics.wordCount = getWordCount(userText);
//                 break;
//             case '--sentences':
//             case '-s':
//                 textStatistics.sentenceCount = getSentenceCount(userText);
//                 break;
//             case '--paragraphs':
//             case '-p':
//                 textStatistics.paragraphCount = getParagraphCount(userText);
//                 break;
//             case '--help':
//             case '-h':
//                 printHelpMessage();
//                 return;
//             default:
//                 console.log(`Unknown argument: ${userArguments[i]}`);
//                 printHelpMessage();
//                 return;
//         }
//     }

//     console.log(JSON.stringify(textStatistics, null, 4));
// }

// handleArguments(process.argv.slice(2));


const { getCharacterCount, getSentenceCount, getParagraphCount, getWordCount } = require("./utilities");

/**
 * Prints the help message out to the console
 */
function printHelpMessage() {
    console.log(`Provides statistics on the provided text, based on user arguments.
        
        Usage: node index.js <arguments> "<your text>"
        Arguments:
          [-s|--sentences]: Count the number of sentences in your text.
          [-w|--words]: Count the number of words in your text.
          [-c|--characters]: Count the number of characters in your text.
          [-p|--paragraphs]: Count the number of paragraphs in your text.`);
}

/**
 * Handles the arguments provided to the application by the user.
 * 
 * @param {string[]} userArguments The arguments provided by the user
 */
function handleArguments(userArguments) {
    if (userArguments.length <= 1) {
        printHelpMessage();
        return;
    }
    /*
        node index.js --characters --sentences "This is my test sentence. This is another test sentence."
     */

    const userText = userArguments[userArguments.length - 1];
    let textStatistics = {};

    for (let i = 0; i < userArguments.length - 1; i++) {
        switch (userArguments[i]) {
            case '--characters':
            case '-c':
                textStatistics.characterCount = getCharacterCount(userText);
                break;
            case '--sentences':
            case '-s':
                textStatistics.sentenceCount = getSentenceCount(userText);
                break;
            case '--paragraphs':
            case '-p':
                textStatistics.paragraphCount = getParagraphCount(userText);
                break;
            case '--words':
            case '-w':
                textStatistics.wordCount = getWordCount(userText);
                break;
            case '--help':
            case '-h':
                printHelpMessage();
                return;
            default:
                console.log("Found an argument we don't support");
                printHelpMessage();
                return;
        }
    }

    console.log(JSON.stringify(textStatistics, null, 4));
}

handleArguments(process.argv.slice(2));