"use client";

import { motion } from "framer-motion";
import { QuizQuestion } from "@/data/kanji_v2";
import { useState, useRef, useEffect, useCallback } from "react";

interface WritingScreenProps {
    question: QuizQuestion;
    currentNumber: number;
    gameTime: number;
    onCorrect: () => void;
    onIncorrect: () => void;
    onEndGame: () => void;
}

function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}分${s}秒`;
}

export function WritingScreen({
    question,
    currentNumber,
    gameTime,
    onCorrect,
    onIncorrect,
    onEndGame,
}: WritingScreenProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const lastPos = useRef<{ x: number; y: number } | null>(null);

    // Get the target kanji from the sentence
    const getTargetKanji = () => {
        const match = question.sentence.match(/\[(.+?)\]/);
        return match ? match[1] : "";
    };

    // Replace the bracketed kanji with a blank for display
    const getMaskedSentence = () => {
        return question.sentence.replace(/\[(.+?)\]/, "（　　）");
    };

    const clearCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Set canvas size
        const size = Math.min(window.innerWidth - 32, 300);
        canvas.width = size;
        canvas.height = size;

        clearCanvas();
    }, [clearCanvas]);

    useEffect(() => {
        // Reset state when question changes
        setShowAnswer(false);
        clearCanvas();
    }, [question, clearCanvas]);

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return null;

        const rect = canvas.getBoundingClientRect();
        let clientX: number, clientY: number;

        if ("touches" in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top,
        };
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        setIsDrawing(true);
        const coords = getCoordinates(e);
        if (coords) {
            lastPos.current = coords;
        }
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        e.preventDefault();

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const coords = getCoordinates(e);
        if (!coords || !lastPos.current) return;

        ctx.strokeStyle = "#333333";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(lastPos.current.x, lastPos.current.y);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        lastPos.current = coords;
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        lastPos.current = null;
    };

    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="flex flex-col h-screen bg-[#F0F9FF] p-4 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center py-4 px-2">
                <div className="flex items-center space-x-2">
                    <div className="text-xl font-bold text-sky-600 bg-white px-4 py-2 rounded-full shadow-sm">
                        {currentNumber}問目
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="text-xl font-bold text-orange-500 bg-white px-4 py-2 rounded-full shadow-sm">
                        {formatTime(gameTime)}
                    </div>
                    <button
                        onClick={onEndGame}
                        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-sm transition-colors text-sm"
                    >
                        おわる
                    </button>
                </div>
            </div>

            {/* Question Area */}
            <div className="flex flex-col items-center justify-center space-y-4 flex-1">
                <motion.div
                    key={question.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-3xl p-6 shadow-xl border-4 border-sky-100 w-full max-w-md text-center"
                >
                    <p className="text-3xl font-medium text-gray-800 mb-2">
                        {getMaskedSentence()}
                    </p>
                    <p className="text-2xl text-red-500 font-bold">
                        よみ：{question.reading}
                    </p>
                </motion.div>

                {/* Canvas Area */}
                <div className="relative">
                    <canvas
                        ref={canvasRef}
                        className="border-4 border-gray-300 rounded-2xl bg-white touch-none"
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                    />
                    {showAnswer && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-[200px] text-red-400 font-bold opacity-70 leading-none">
                                {getTargetKanji()}
                            </span>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 w-full max-w-md">
                    <button
                        onClick={clearCanvas}
                        className="flex-1 py-4 bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold rounded-2xl shadow-md transition-colors"
                    >
                        けす
                    </button>
                    <button
                        onClick={handleToggleAnswer}
                        className={`flex-1 py-4 text-white text-xl font-bold rounded-2xl shadow-md transition-colors ${showAnswer
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-green-500 hover:bg-green-600"
                            }`}
                    >
                        {showAnswer ? "かくす" : "こたえ"}
                    </button>
                </div>

                {/* Grading Buttons */}
                <div className="flex space-x-4 w-full max-w-md">
                    <button
                        onClick={onIncorrect}
                        className="flex-1 py-5 bg-red-500 hover:bg-red-600 text-white text-2xl font-bold rounded-2xl shadow-md transition-colors"
                    >
                        ✕ ふせいかい
                    </button>
                    <button
                        onClick={onCorrect}
                        className="flex-1 py-5 bg-sky-500 hover:bg-sky-600 text-white text-2xl font-bold rounded-2xl shadow-md transition-colors"
                    >
                        ○ せいかい
                    </button>
                </div>
            </div>
        </div>
    );
}
