"use client";

import { motion } from "framer-motion";
import { Trophy, RefreshCcw, Clock } from "lucide-react";

import { QuizQuestion } from "@/data/kanji_v2";

interface ResultScreenProps {
    gameTime: number;
    total: number;
    onRestart: () => void;
    reportedQuestions: QuizQuestion[];
}

function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}分${s}秒`;
}

export function ResultScreen({ gameTime, total, onRestart, reportedQuestions }: ResultScreenProps) {
    // Determine message based on time? Or simply congratulate.
    // Let's keep it simple.
    let message = "ゲームじかん ゲット！";

    const handleCopyReports = async () => {
        if (reportedQuestions.length === 0) return;

        const reportText = JSON.stringify(reportedQuestions, null, 2);
        try {
            await navigator.clipboard.writeText(reportText);
            alert("ほうこくを コピーしました！");
        } catch (err) {
            console.error('Failed to copy: ', err);
            alert("コピーに しっぱいしました。");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center space-y-8">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="bg-white p-12 rounded-3xl shadow-2xl border-4 border-sky-100 max-w-2xl w-full"
            >
                <Clock className="w-32 h-32 mx-auto mb-6 text-orange-400" />

                <h2 className="text-4xl font-bold text-gray-700 mb-2">{message}</h2>

                <div className="text-6xl font-black text-orange-500 mb-8">
                    {formatTime(gameTime)}
                </div>

                {reportedQuestions.length > 0 && (
                    <div className="mb-8 p-4 bg-red-50 rounded-xl border-2 border-red-100">
                        <h3 className="text-xl font-bold text-red-500 mb-2">ほうこくした もんだい</h3>
                        <div className="text-left text-sm text-gray-600 max-h-32 overflow-y-auto mb-4 bg-white p-2 rounded">
                            {reportedQuestions.map(q => (
                                <div key={q.id} className="border-b last:border-0 py-1">
                                    ID: {q.id} / {q.sentence}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleCopyReports}
                            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm transition-colors text-sm w-full"
                        >
                            まとめてコピー
                        </button>
                    </div>
                )}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onRestart}
                    className="flex items-center justify-center gap-3 w-full py-5 bg-sky-500 text-white text-2xl font-bold rounded-2xl shadow-lg active:bg-sky-600 transition-colors"
                >
                    <RefreshCcw className="w-8 h-8" />
                    もういちど やる
                </motion.button>
            </motion.div>
        </div>
    );
}
