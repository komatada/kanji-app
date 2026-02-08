"use client";

import React, { useEffect, useState } from "react";
import { KANJI_DATA_V2, KanjiEntry, KanjiReading } from "@/data/kanji_v2";
import { generateQuizQuestions } from "@/lib/quizLogic";

interface Log {
    type: "info" | "error" | "success" | "warning";
    message: string;
}

export default function DebugPage() {
    const [logs, setLogs] = useState<Log[]>([]);
    const [status, setStatus] = useState<"running" | "pass" | "fail">("running");

    useEffect(() => {
        runTests();
    }, []);

    const runTests = () => {
        const newLogs: Log[] = [];
        let errorCount = 0;

        const log = (message: string, type: Log["type"] = "info") => {
            newLogs.push({ type, message });
            if (type === "error") errorCount++;
        };

        log("Starting Data Verification...", "info");

        // 1. Duplicate Checks
        const idMap = new Map<string, string>();
        const charMap = new Map<string, string>();

        KANJI_DATA_V2.forEach((entry) => {
            // ID Check
            if (idMap.has(entry.id)) {
                log(`Duplicate ID found: ${entry.id} (Char: ${entry.character} & ${idMap.get(entry.id)})`, "error");
            } else {
                idMap.set(entry.id, entry.character);
            }

            // Character Check
            if (charMap.has(entry.character)) {
                log(`Duplicate Character found: ${entry.character} (ID: ${entry.id} & ${charMap.get(entry.character)})`, "error");
            } else {
                charMap.set(entry.character, entry.id);
            }
        });

        if (errorCount === 0) log("Duplicate Checks Passed", "success");

        // 2. Data Integrity & Sentence Format
        KANJI_DATA_V2.forEach((entry) => {
            if (!entry.readings || entry.readings.length === 0) {
                log(`No readings found for ${entry.character} (ID: ${entry.id})`, "error");
                return;
            }

            entry.readings.forEach((r, idx) => {
                if (!r.type || !r.reading || !r.sentence) {
                    log(`Incomplete reading data for ${entry.character} (ID: ${entry.id}, index: ${idx})`, "error");
                }

                // Bracket check
                // We look for [X] or [abcXdef] where X is the character.
                // Simplified check: Does sentence contain '[' and ']'?
                if (!r.sentence.includes("[") || !r.sentence.includes("]")) {
                    log(`Sentence missing brackets: ${entry.character} (${r.reading}) -> ${r.sentence}`, "error");
                } else {
                    // Check if the character inside brackets roughly matches the target character
                    // Valid formats: [漢]字, [漢]方薬
                    // Bad formats: [字]漢 (wrong char highlighted)
                    const regex = /\[(.*?)\]/;
                    const match = r.sentence.match(regex);
                    if (match && !match[1].includes(entry.character)) {
                        log(`Brackets might be highlighting wrong char: ${entry.character} (${r.reading}) -> ${r.sentence}. Found '${match[1]}' inside [].`, "warning");
                    }
                }
            });
        });

        // 3. Quiz Generation Test
        try {
            log("Testing Quiz Generation (100 iterations)...", "info");
            for (let i = 0; i < 100; i++) {
                const quiz = generateQuizQuestions(KANJI_DATA_V2, 10);
                if (quiz.length !== 10 && KANJI_DATA_V2.length >= 10) {
                    log(`Iteration ${i}: Generated ${quiz.length} questions instead of 10`, "warning");
                }

                // Check for NaN or undefined in generated questions
                quiz.forEach((q, qIdx) => {
                    if (!q.choices || q.choices.length < 2) {
                        log(`Iteration ${i}, Q${qIdx}: Question has too few choices`, "error");
                    }
                });
            }
            log("Quiz Generation Stress Test Completed", "success");
        } catch (e: any) {
            log(`Quiz Generation Crashed: ${e.message}`, "error");
        }

        setLogs(newLogs);
        setStatus(errorCount === 0 ? "pass" : "fail");
    };

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<KanjiEntry | null>(null);

    const startEdit = (entry: KanjiEntry) => {
        setEditingId(entry.id);
        setEditForm(JSON.parse(JSON.stringify(entry))); // Deep copy
    };

    const handleSave = async () => {
        if (!editForm) return;

        try {
            const res = await fetch('/api/update-kanji', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ entry: editForm })
            });

            const data = await res.json();
            if (data.success) {
                alert("保存しました！ページをリロードして反映を確認してください。");
                setEditingId(null);
                setEditForm(null);
            } else {
                alert("保存失敗: " + data.error);
            }
        } catch (e) {
            alert("通信エラー");
        }
    };

    const updateReading = (index: number, field: keyof KanjiReading, value: string) => {
        if (!editForm) return;
        const newReadings = [...editForm.readings];
        // @ts-ignore
        newReadings[index][field] = value;
        setEditForm({ ...editForm, readings: newReadings });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">System Diagnostics & Data Editor</h1>
                    <div className={`px-4 py-2 rounded-full font-bold text-white ${status === 'running' ? 'bg-blue-500' :
                        status === 'pass' ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                        {status.toUpperCase()}
                    </div>
                </div>

                <div className="flex gap-4 mb-6">
                    <button
                        onClick={runTests}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-medium transition-colors"
                    >
                        Rerun Tests
                    </button>
                    <button
                        onClick={() => {
                            const text = logs.map(l => `[${l.type.toUpperCase()}] ${l.message}`).join('\n');
                            navigator.clipboard.writeText(text);
                            alert("Logs copied to clipboard!");
                        }}
                        className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded text-blue-700 font-medium transition-colors"
                    >
                        Copy Logs
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Logs */}
                    <div className="space-y-2 font-mono text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto max-h-[600px] overflow-y-auto">
                        <h2 className="text-gray-400 font-bold mb-2 border-b border-gray-700 pb-1">Validation Logs</h2>
                        {logs.map((log, i) => (
                            <div key={i} className={`
                    ${log.type === 'error' ? 'text-red-400' : ''}
                    ${log.type === 'success' ? 'text-green-400' : ''}
                    ${log.type === 'warning' ? 'text-yellow-400' : ''}
                    ${log.type === 'info' ? 'text-gray-300' : ''}
                    `}>
                                <span className="opacity-50 mr-2">[{log.type.toUpperCase()}]</span>
                                {log.message}
                            </div>
                        ))}
                        {logs.length === 0 && <div className="text-gray-500">Initializing tests...</div>}
                    </div>

                    {/* Right: Data Editor */}
                    <div className="bg-gray-100 p-4 rounded-lg max-h-[600px] overflow-y-auto">
                        <h2 className="text-gray-700 font-bold mb-4 border-b pb-2">Data Editor ({KANJI_DATA_V2.length} entries)</h2>
                        {KANJI_DATA_V2.map((entry) => (
                            <div key={entry.id} className="bg-white p-3 rounded shadow mb-3">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold">{entry.character} <span className="text-sm text-gray-400 font-normal">ID: {entry.id}</span></h3>
                                    <button
                                        onClick={() => startEdit(entry)}
                                        className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                </div>

                                {/* Edit Mode for this entry */}
                                {editingId === entry.id && editForm && (
                                    <div className="mt-2 border-t pt-2 bg-blue-50 p-2 rounded">
                                        <div className="space-y-2">
                                            {editForm.readings.map((r, idx) => (
                                                <div key={idx} className="flex flex-col gap-1 p-2 border rounded bg-white">
                                                    <div className="flex gap-2">
                                                        <select
                                                            value={r.type}
                                                            onChange={e => updateReading(idx, 'type', e.target.value)}
                                                            className="border p-1 rounded text-sm w-20"
                                                        >
                                                            <option value="on">On</option>
                                                            <option value="kun">Kun</option>
                                                        </select>
                                                        <input
                                                            value={r.reading}
                                                            onChange={e => updateReading(idx, 'reading', e.target.value)}
                                                            className="border p-1 rounded text-sm flex-1"
                                                            placeholder="Reading"
                                                        />
                                                    </div>
                                                    <input
                                                        value={r.sentence}
                                                        onChange={e => updateReading(idx, 'sentence', e.target.value)}
                                                        className="border p-1 rounded text-sm w-full"
                                                        placeholder="Sentence (use [ ])"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-end gap-2 mt-3">
                                            <button onClick={() => setEditingId(null)} className="px-3 py-1 text-gray-500 text-sm">Cancel</button>
                                            <button onClick={handleSave} className="px-3 py-1 bg-green-500 text-white rounded text-sm font-bold shadow hover:bg-green-600">Save Changes</button>
                                        </div>
                                    </div>
                                )}

                                {/* View Mode */}
                                {editingId !== entry.id && (
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {entry.readings.map((r, i) => (
                                            <li key={i}>
                                                <span className={`inline-block w-8 text-xs font-mono uppercase ${r.type === 'on' ? 'text-red-500' : 'text-blue-500'}`}>{r.type}</span>
                                                <span className="font-bold mr-2">{r.reading}</span>
                                                <span className="text-gray-500">{r.sentence}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
