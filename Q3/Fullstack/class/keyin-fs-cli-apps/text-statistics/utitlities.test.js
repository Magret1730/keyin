const { getWordCount, getParagraphCount, getSentenceCount, getCharacterCount } = require("./utilities");

describe("Tests for the utility functions", () => {
    describe("Tests for the getWordCount", () => {
       test("Correctly counts words when given multiple words", () => {
           expect(getWordCount("This is a test")).toBe(4);
       });
       test("Correctly counts words when given a single word", () => {
           expect(getWordCount("Hello!")).toBe(1);
       });
        test("Correctly counts words when given an empty string", () => {
            expect(getWordCount("")).toBe(0);
        }); 
    });

    describe("Tests for the getParagraphCount", () => {
        test("Correctly counts paragraphs when given multiple paragraphs", () => {
            expect(getParagraphCount(`
                This is a test.
                This is only a test.
            `)).toBe(2);
        });

        test("Correctly counts paragraphs when given a single paragraph", () => {
            expect(getParagraphCount("This is only a test.")).toBe(1);
        });

        test("Correctly counts paragraphs when given an empty string", () => {
            expect(getParagraphCount("")).toBe(0);
        });
    });

    describe("Tests for the getSentenceCount", () => {
        test("Correctly counts sentences when given multiple sentences", () => {
            expect(getSentenceCount("This is a test. This is only a test!")).toBe(2);
        });
        test("Correctly counts sentences when given a single sentence", () => {
            expect(getSentenceCount("This is only a test.")).toBe(1);
        });
        test("Correctly counts sentences when given an empty string", () => {
            expect(getSentenceCount("")).toBe(0);
        });
    });

    describe("Tests for the getCharacterCount", () => {
        test("Correctly counts characters when given multiple characters", () => {
            expect(getCharacterCount("This is a test.")).toBe(15);
        });
        test("Correctly counts characters when given a single character", () => {
            expect(getCharacterCount("A")).toBe(1);
        });
        test("Correctly counts characters when given an empty string", () => {
            expect(getCharacterCount("")).toBe(0);
        });
    });
});