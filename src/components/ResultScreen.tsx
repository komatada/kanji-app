"use client";

import { motion } from "framer-motion";
import { Trophy, RefreshCcw, Clock } from "lucide-react";

interface ResultScreenProps {
    gameTime: number;
    total: number;
    onRestart: () => void;
}

function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}分${s}秒`;
}

export function ResultScreen({ gameTime, total, onRestart }: ResultScreenProps) {
    // Determine message based on time? Or simply congratulate.
    // Let's keep it simple.
    let message = "ゲームじかん ゲット！";

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
