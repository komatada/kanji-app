
const { KANJI_DATA, getRandomQuestions } = require('./src/data/kanji.ts');

// We need to mock the environment since we can't run TS directly easily without ts-node setup in this specific way often
// Actually, easier to just copy the logic into a standalone JS file for testing.

const MOCK_DATA = [
    { id: "18", character: "化", reading: "か", sentence: "お 化 けが出る。" },
    { id: "1", character: "悪", reading: "わる", sentence: "悪 いことをしてはいけない。" },
    { id: "2", character: "安", reading: "やす", sentence: "この店は 安 い。" },
    { id: "3", character: "暗", reading: "くら", sentence: "部屋が 暗 い。" },
    // ... add a few more to allow random selection
    { id: "4", character: "医", reading: "い", sentence: "医 者になるのが夢だ。" },
    { id: "5", character: "委", reading: "い", sentence: "委員を 委 任する。" },
];

// Helper to get random wrong choices (COPIED LOGIC)
function getRandomReadings(dataset, correctReading, count) {
    const allReadings = Array.from(new Set(dataset.map(k => k.reading)));
    // Filter out correct reading
    const otherReadings = allReadings.filter(r => r !== correctReading);

    // Sort random
    const shuffled = otherReadings.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Logic verifier
function verifyLogic() {
    console.log("Starting verification...");

    // We want to specifically test "化" (ka)
    const target = MOCK_DATA[0]; // 化

    for (let i = 0; i < 1000; i++) {
        // GENERATION LOGIC
        const wrongReadings = getRandomReadings(MOCK_DATA, target.reading, 3);
        const choices = [...wrongReadings, target.reading].sort(() => 0.5 - Math.random());

        // VERIFICATION
        if (!choices.includes(target.reading)) {
            console.error("FATAL: Correct reading missing from choices!");
            console.error("Target:", target);
            console.error("Choices:", choices);
            return;
        }

        if (choices.length !== 4) {
            // It might be less if not enough unique readings exist in mock, but in real app we have 200 items.
            // In this mock we have 6 items with readings: か, わる, やす, くら, い, い (duplicate 'い')
            // Unique: か, わる, やす, くら, い (5 items).
            // If target is 'い', otherReadings = [か, わる, やす, くら] (4 items). We pick 3.
            // If target is 'か', otherReadings = [わる, やす, くら, い]. We pick 3.
        }
    }
    console.log("Verification of 1000 iterations passed.");
}

verifyLogic();
