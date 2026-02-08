"use client";

import { motion } from "framer-motion";

export type GameMode = "READING" | "WRITING";

interface StartScreenProps {
    onStart: (mode: GameMode) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center space-y-12">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl font-bold text-sky-600 tracking-wider mb-4">
                    3年生漢字マスター
                </h1>
                <p className="text-2xl text-gray-600">
                    たのしく かんじを おぼえよう！
                </p>
            </motion.div>

            <div className="flex flex-col space-y-6 w-full max-w-md">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        scale: [1, 1.03, 1],
                        boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 20px rgba(14, 165, 233, 0.3)", "0px 0px 0px rgba(0,0,0,0)"]
                    }}
                    transition={{
                        scale: { duration: 2, repeat: Infinity },
                        boxShadow: { duration: 2, repeat: Infinity }
                    }}
                    onClick={() => onStart("READING")}
                    className="px-12 py-6 bg-sky-500 text-white text-4xl font-bold rounded-full shadow-xl active:bg-sky-600 transition-colors"
                >
                    よむ
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        scale: [1, 1.03, 1],
                        boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 20px rgba(249, 115, 22, 0.3)", "0px 0px 0px rgba(0,0,0,0)"]
                    }}
                    transition={{
                        scale: { duration: 2, repeat: Infinity, delay: 0.5 },
                        boxShadow: { duration: 2, repeat: Infinity, delay: 0.5 }
                    }}
                    onClick={() => onStart("WRITING")}
                    className="px-12 py-6 bg-orange-500 text-white text-4xl font-bold rounded-full shadow-xl active:bg-orange-600 transition-colors"
                >
                    かく
                </motion.button>
            </div>
        </div>
    );
}

