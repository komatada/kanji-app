import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { KanjiEntry } from "@/data/kanji_v2";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const updatedEntry: KanjiEntry = body.entry;

        if (!updatedEntry || !updatedEntry.id) {
            return NextResponse.json({ error: "Invalid data" }, { status: 400 });
        }

        // Path to the data file
        const dataFilePath = path.join(process.cwd(), "src", "data", "kanji_v2.ts");

        // Read the file content
        let content = await fs.readFile(dataFilePath, "utf-8");

        // Construct the regex to find the specific entry block
        // We look for: { id: "TARGET_ID", ... }
        // This regex is tricky because of nested braces and newlines. 
        // We assume standard formatting:
        // {
        //     id: "1",
        //     ...
        // },

        // Strategy: Find the start of the object with the ID.
        // Then find the matching closing brace.
        const idMarker = `id: "${updatedEntry.id}"`;
        const startIndex = content.indexOf(idMarker);

        if (startIndex === -1) {
            return NextResponse.json({ error: "Entry not found" }, { status: 404 });
        }

        // Move back to find the opening brace '{' of this object
        // We search backwards from startIndex
        let objectStart = content.lastIndexOf("{", startIndex);
        if (objectStart === -1) {
            return NextResponse.json({ error: "Could not locate object start" }, { status: 500 });
        }

        // Find the end of the object. Simple brace counting.
        let braceCount = 1;
        let objectEnd = -1;
        for (let i = objectStart + 1; i < content.length; i++) {
            if (content[i] === "{") braceCount++;
            if (content[i] === "}") braceCount--;
            if (braceCount === 0) {
                objectEnd = i + 1; // Include the closing brace
                break;
            }
        }

        if (objectEnd === -1) {
            return NextResponse.json({ error: "Could not locate object end" }, { status: 500 });
        }

        // Format the new entry string
        // We try to match the indentation of the file (4 spaces)
        const newEntryString = JSON.stringify(updatedEntry, null, 4)
            // Check if keys need quotes? Standard JSON adds quotes to keys "id": "1". 
            // Our TS file uses id: "1".
            // Let's rely on a helper to format it more like JS object literal
            .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
            .replace(/\n}/g, '\n    }')     // Fix closing brace indent
            .replace(/\n/g, '\n    ');      // Indent contents

        // We need to un-indent the very first brace? No, let's just construct manually or use a standard formatter if we had one.
        // For safety and simpler parsing compliance by next read, let's construct it manually to look good.
        const formattedReadings = updatedEntry.readings.map(r =>
            `            { type: "${r.type}", reading: "${r.reading}", sentence: "${r.sentence}" }`
        ).join(",\n");

        const replacement = `    {
        id: "${updatedEntry.id}",
        character: "${updatedEntry.character}",
        readings: [
${formattedReadings}
        ]
    }`;

        // Replace the content
        const newContent = content.substring(0, objectStart) + replacement.trim() + content.substring(objectEnd);

        // Write back
        await fs.writeFile(dataFilePath, newContent, "utf-8");

        return NextResponse.json({ success: true, message: `Updated ID ${updatedEntry.id}` });

    } catch (error: any) {
        console.error("Update failed:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
