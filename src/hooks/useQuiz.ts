"use client";

import { useState, useCallback } from "react";
import { KANJI_DATA_V2, QuizQuestion } from "@/data/kanji_v2";
import { generateQuizQuestions } from "@/lib/quizLogic";

export type GameState = "START" | "PLAYING" | "RESULT";

export function useQuiz() {
    const [gameState, setGameState] = useState<GameState>("START");
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [gameTime, setGameTime] = useState(0); // Seconds
    const [history, setHistory] = useState<{ question: QuizQuestion; isCorrect: boolean }[]>([]);

    const startGame = useCallback(() => {
        // Use new generator
        const newQuestions = generateQuizQuestions(KANJI_DATA_V2, 10);

        setQuestions(newQuestions);
        setCurrentQuestionIndex(0);
        // setGameTime(0); // Keep accumulated time
        setHistory([]);
        setGameState("PLAYING");
    }, []);

    const answerQuestion = useCallback((selectedReading: string) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (!currentQuestion) return;

        const isCorrect = selectedReading === currentQuestion.reading;

        if (isCorrect) {
            setGameTime((prev) => prev + 30);
        } else {
            setGameTime((prev) => Math.max(0, prev - 30));
        }

        setHistory((prev) => [...prev, { question: currentQuestion, isCorrect }]);
    }, [questions, currentQuestionIndex]);

    const nextQuestion = useCallback(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setGameState("RESULT");
        }
    }, [currentQuestionIndex, questions.length]);

    const currentQuestion = questions[currentQuestionIndex];

    return {
        gameState,
        currentQuestion,
        currentQuestionIndex,
        totalQuestions: questions.length,
        gameTime,
        history,
        startGame,
        answerQuestion,
        nextQuestion,
    };
}
