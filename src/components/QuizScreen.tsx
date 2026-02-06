"use client";

import { motion } from "framer-motion";
import { QuizQuestion } from "@/data/kanji_v2";
import { useState } from "react";

interface QuizScreenProps {
    question: QuizQuestion;
    currentNumber: number;
    totalNumber: number;
    gameTime: number;
    onAnswer: (reading: string) => void;
    isProcessing: boolean; // Disable input while showing feedback
}

function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}分${s}秒`;
}

export function QuizScreen({
    question,
    currentNumber,
    totalNumber,
    gameTime,
    onAnswer,
    isProcessing
}: QuizScreenProps) {
    // Local state to show selected button styling if needed, 
    // but for simple quiz, we might just trigger onAnswer immediately.
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        if (isProcessing) return;
        setSelectedChoice(choice);
        onAnswer(choice);
        // Reset selection is handled by parent changing question or unmounting
    };

    return (
        <div className="flex flex-col h-screen  bg-[#F0F9FF] p-4 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center py-4 px-2">
                <div className="text-xl font-bold text-sky-600 bg-white px-4 py-2 rounded-full shadow-sm">
                    もんだい {currentNumber} / {totalNumber}
                </div>
                <div className="text-xl font-bold text-orange-500 bg-white px-4 py-2 rounded-full shadow-sm">
                    ゲーム時間: {formatTime(gameTime)}
                </div>
            </div>

            {/* Question Area */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 w-full">
                <motion.div
                    key={question.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border-4 border-sky-100 flex items-center justify-center min-h-[200px] w-full max-w-2xl px-8"
                >
                    <div className="text-4xl md:text-5xl font-medium text-gray-800 leading-normal text-center break-words w-full">
                        {/* Parse sentence with format "Prefix[Target]Suffix" */}
                        {question.sentence.split(/(\[.*?\])/).map((part, index) => {
                            if (part.startsWith('[') && part.endsWith(']')) {
                                const content = part.slice(1, -1);
                                return (
                                    <span key={index} className="text-red-500 font-bold mx-1 border-b-4 border-red-500 inline-block">
                                        {content}
                                    </span>
                                );
                            }
                            return <span key={index}>{part}</span>;
                        })}
                    </div>
                </motion.div>

                <p className="text-2xl text-gray-600 font-bold">
                    あかい かんじ の よみかた は？
                </p>
            </div>

            {/* Choices Area */}
            <div className="grid grid-cols-2 gap-4 pb-8 md:pb-12">
                {question.choices.map((choice, index) => (
                    <motion.button
                        key={`${question.id}-${index}`}
                        whileHover={!isProcessing ? { scale: 1.02 } : {}}
                        whileTap={!isProcessing ? { scale: 0.98 } : {}}
                        onClick={() => handleChoice(choice)}
                        disabled={isProcessing}
                        className={`
              h-24 text-3xl font-bold rounded-2xl shadow-md transition-all border-b-4
              ${isProcessing
                                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                : 'bg-white text-gray-700 border-sky-200 hover:bg-sky-50 active:border-sky-300'
                            }
            `}
                    >
                        {choice}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
