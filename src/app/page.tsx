"use client";

import { useQuiz } from "@/hooks/useQuiz";
import { useGameSound } from "@/hooks/useGameSound";
import { StartScreen } from "@/components/StartScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { Feedback } from "@/components/Feedback";
import { useState, useEffect } from "react";

export default function Home() {
  const {
    gameState,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    gameTime,
    startGame,
    answerQuestion,
    nextQuestion,
  } = useQuiz();

  const { playCorrect, playIncorrect, playClick } = useGameSound();

  const [feedbackState, setFeedbackState] = useState<{
    show: boolean;
    isCorrect: boolean | null;
  }>({ show: false, isCorrect: null });

  const handleStart = () => {
    playClick();
    startGame();
  };

  const handleRestart = () => {
    playClick();
    startGame();
  };

  const handleAnswer = (reading: string) => {
    if (!currentQuestion) return;

    const isCorrect = reading === currentQuestion.reading;

    if (isCorrect) {
      playCorrect();
    } else {
      playIncorrect();
    }

    answerQuestion(reading);

    // Show feedback
    setFeedbackState({ show: true, isCorrect });

    // Wait and move to next
    setTimeout(() => {
      setFeedbackState({ show: false, isCorrect: null });
      nextQuestion();
    }, 1500); // 1.5 second delay
  };

  useEffect(() => {
    // Prevent scrolling on iPad
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F0F9FF] select-none overflow-hidden touch-none">
      <Feedback isCorrect={feedbackState.isCorrect} />

      {gameState === "START" && (
        <StartScreen onStart={handleStart} />
      )}

      {gameState === "PLAYING" && currentQuestion && (
        <QuizScreen
          question={currentQuestion}
          currentNumber={currentQuestionIndex + 1}
          totalNumber={totalQuestions}
          gameTime={gameTime}
          onAnswer={handleAnswer}
          isProcessing={feedbackState.show}
        />
      )}

      {gameState === "RESULT" && (
        <ResultScreen
          gameTime={gameTime}
          total={totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </main>
  );
}
