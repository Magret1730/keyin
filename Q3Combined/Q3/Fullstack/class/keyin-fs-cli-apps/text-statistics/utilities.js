#!/usr/bin/env node

/**
 * Gets the number of words in the provided text
 * 
 * @param {string} text The text to get the word count from
 * @returns The number of words in the text
 */
function getWordCount(text) {
    if (text === "") {
        return 0;
    }

    return text.split(" ").length;
}

/**
 * Gets the number of paragraphs in the provided text
 * 
 * @param {string} text The text to get the paragraph count from
 * @returns The number of paragraphs in the text
 */
function getParagraphCount(text) {
    if (text === "") {
        return 0;
    }
    return text.trim().split("\n").length;
}

/**
 * Gets the number of sentences in the provided text
 * 
 * @param {string} text The text to get the sentence count from
 * @returns The number of sentences in the text
 */
function getSentenceCount(text) {
    if (text === "") {
        return 0;
    }
    return text
            .split(/[\.\?!]/)
            .filter(((element) => element !== ""))
            .length;
}

/**
 * Gets the number of characters in the provided text
 * 
 * @param {string} text The text to get the character count from
 * @returns The number of characters in the text
 */
function getCharacterCount(text) {
    if (text === "") {
        return 0;
    }
    return text.length;
}

module.exports = {
    getWordCount,
    getParagraphCount,
    getSentenceCount,
    getCharacterCount
}