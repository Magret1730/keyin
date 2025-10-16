const { getStreak } = require('../../utils/utilities.js');

describe("Tests for getStreak", () => {
    test("Verify streak calculation with mixed moods", () => {
        const moodHistory = [
            { mood: "Sad", date: "2023-10-01" },
            { mood: "Happy", date: "2023-10-02" },
            { mood: "Excited", date: "2023-10-03" },
            { mood: "Happy", date: "2023-10-04" },
        ];

        const streak = getStreak(moodHistory);
        console.log("streak", streak);
        expect(streak).toBe(3);
    });
    test("Verify streak calculation with no positive moods", () => {
        const moodHistory = [
            { mood: "Sad", date: "2023-10-01" },
            { mood: "Stressed", date: "2023-10-02" },
            { mood: "Okay", date: "2023-10-03" },
        ];

        const streak = getStreak(moodHistory);
        expect(streak).toBe(0);
    });
    test("Verify streak calculation with all positive moods", () => {
        const moodHistory = [
            { mood: "Happy", date: "2023-10-01" },
            { mood: "Excited", date: "2023-10-02" },
            { mood: "Happy", date: "2023-10-03" },
        ];

        const streak = getStreak(moodHistory);
        expect(streak).toBe(3);
    });
    test("Verify streak calculation with empty mood history", () => {
        const moodHistory = [];

        const streak = getStreak(moodHistory);
        expect(streak).toBe(0);
    });
    test("Verify streak calculation with single positive mood", () => {
        const moodHistory = [
            { mood: "Happy", date: "2023-10-01" },
        ];

        const streak = getStreak(moodHistory);
        expect(streak).toBe(1);
    });
    test("Verify streak calculation with single non-positive mood", () => {
        const moodHistory = [
            { mood: "Sad", date: "2023-10-01" },
        ];

        const streak = getStreak(moodHistory);
        expect(streak).toBe(0);
    });
    test("Verify streak calculation with alternating moods", () => {
        const moodHistory = [
            { mood: "Happy", date: "2023-10-01" },
            { mood: "Sad", date: "2023-10-02" },
            { mood: "Excited", date: "2023-10-03" },
            { mood: "Stressed", date: "2023-10-04" },
            { mood: "Happy", date: "2023-10-05" },
        ];

        const streak = getStreak(moodHistory);
        expect(streak).toBe(1);
    });
    test("Verify streak calculation with invalid mood entries", () => {
        const moodHistory = [
            { mood: "Happy", date: "2023-10-01" },
            { mood: null, date: "2023-10-02" },
            { mood: "", date: "2023-10-03" },
            { mood: "Excited", date: "2023-10-04" },
        ];
    
        const streak = getStreak(moodHistory);
        expect(streak).toBe(1);
    });
});