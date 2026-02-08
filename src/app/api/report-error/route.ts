import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { questionId, sentence, currentReadings, reportedAt } = body;

        if (!questionId) {
            return NextResponse.json({ error: "Missing questionId" }, { status: 400 });
        }

        const report = {
            questionId,
            sentence,
            currentReadings,
            reportedAt: reportedAt || new Date().toISOString(),
        };

        const dataFilePath = path.join(process.cwd(), "src", "data", "reported_errors.json");

        let reports = [];
        try {
            const content = await fs.readFile(dataFilePath, "utf-8");
            reports = JSON.parse(content);
        } catch (error) {
            // If file doesn't exist or is empty, start with empty array
        }

        reports.push(report);

        await fs.writeFile(dataFilePath, JSON.stringify(reports, null, 2), "utf-8");

        return NextResponse.json({ success: true, message: "Report saved" });

    } catch (error: any) {
        console.error("Report failed:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
