"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FeedbackProps {
    isCorrect: boolean | null; // null means no feedback yet
}

export function Feedback({ isCorrect }: FeedbackProps) {
    return (
        <AnimatePresence>
            {isCorrect !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                >
                    {isCorrect ? (
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                className="w-64 h-64 rounded-full border-[12px] border-red-500 flex items-center justify-center bg-white/80"
                            >
                                <span className="text-[150px] font-bold text-red-500 leading-none mt-[-20px]">〇</span>
                            </motion.div>
                            {/* Confetti effects could be added here */}
                        </div>
                    ) : (
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                className="w-64 h-64 flex items-center justify-center"
                            >
                                <span className="text-[200px] font-bold text-blue-500 leading-none">✕</span>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
