import { KanjiEntry, KanjiReading, QuizQuestion } from "@/data/kanji_v2";

// Helper to generate smart distractors
function getSmartDistractors(correctReading: string, allReadings: string[], count: number): string[] {
    const distractors = new Set<string>();

    // 1. Generate phonetically similar distractors (heuristic based)
    const similar = generateSimilarReadings(correctReading);
    similar.forEach(r => {
        if (r !== correctReading && distractors.size < count) {
            distractors.add(r);
        }
    });

    // 2. Fill remaining with random readings from the pool (that are not correct)
    const pool = allReadings.filter(r => r !== correctReading && !distractors.has(r));
    const shuffledPool = pool.sort(() => 0.5 - Math.random());

    for (const r of shuffledPool) {
        if (distractors.size >= count) break;
        distractors.add(r);
    }

    return Array.from(distractors).sort(() => 0.5 - Math.random());
}

function generateSimilarReadings(reading: string): string[] {
    const variants: string[] = [];

    // Rule: Long vowel variants (kou <-> ko, yuu <-> yu)
    if (reading.endsWith("う")) {
        variants.push(reading.slice(0, -1)); // Remove 'u'
    } else {
        variants.push(reading + "う"); // Add 'u'
    }

    // Rule: Small tsu (kku <-> ku)
    if (reading.includes("っ")) {
        variants.push(reading.replace(/っ/g, ""));
    }

    // Rule: Voiced/Unvoiced (simplified check for common ones)
    // ka <-> ga, ta <-> da, etc. 
    // This is hard to do perfectly without a mapping, let's add a few common ones manually or just rely on the heuristic that "changing one char is confusing"

    // Heuristic: Swap common confusing chars
    if (reading.includes("し")) variants.push(reading.replace("し", "ち"));
    if (reading.includes("ち")) variants.push(reading.replace("ち", "し"));
    if (reading.includes("つ")) variants.push(reading.replace("つ", "す"));
    if (reading.includes("す")) variants.push(reading.replace("す", "つ"));
    if (reading.includes("じ")) variants.push(reading.replace("じ", "ぢ"));
    if (reading.includes("ず")) variants.push(reading.replace("ず", "づ"));

    return variants;
}

export function generateQuizQuestions(data: KanjiEntry[], count: number = 10): QuizQuestion[] {
    // Flatten all possible questions into a single pool
    const allQuestions: { entry: KanjiEntry; reading: KanjiReading }[] = [];
    const allReadings = new Set<string>();

    data.forEach(entry => {
        entry.readings.forEach(reading => {
            allQuestions.push({ entry, reading });
            allReadings.add(reading.reading);
        });
    });

    // Shuffle and pick
    const selected = allQuestions.sort(() => 0.5 - Math.random()).slice(0, count);
    const readingList = Array.from(allReadings);

    return selected.map(({ entry, reading }) => {
        const distractors = getSmartDistractors(reading.reading, readingList, 3);
        // Ensure we have exactly 3 distractors + 1 correct = 4 choices usually.
        // If we don't have enough smart distractors or pool is small, we might have fewer, but logic handles it.
        const choices = [...distractors, reading.reading].sort(() => 0.5 - Math.random());

        return {
            id: `${entry.id}-${reading.type}-${reading.reading}`, // Unique ID for key
            character: entry.character,
            reading: reading.reading,
            sentence: reading.sentence,
            choices
        };
    });
}
