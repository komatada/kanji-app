"use client";

import { useQuiz } from "@/hooks/useQuiz";
import { useGameSound } from "@/hooks/useGameSound";
import { StartScreen, GameMode } from "@/components/StartScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { WritingScreen } from "@/components/WritingScreen";
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
    endGame,
    reportedQuestions,
    reportQuestion,
  } = useQuiz();

  const { playCorrect, playIncorrect, playClick } = useGameSound();

  const [gameMode, setGameMode] = useState<GameMode>("READING");

  const [feedbackState, setFeedbackState] = useState<{
    show: boolean;
    isCorrect: boolean | null;
  }>({ show: false, isCorrect: null });

  const handleStart = (mode: GameMode) => {
    playClick();
    setGameMode(mode);
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

  const handleReport = async () => {
    if (!currentQuestion) return;

    // Track reported question locally for Result Screen
    reportQuestion(currentQuestion);

    try {
      const response = await fetch("/api/report-error", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          sentence: currentQuestion.sentence,
          currentReadings: currentQuestion.choices, // Assuming choices are readings
          reportedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert("ほうこくしました！ありがとう！");
      } else {
        console.error("Failed to report");
        alert("エラーが発生しました。");
      }
    } catch (error) {
      console.error("Error reporting:", error);
      alert("エラーが発生しました。");
    }
  };

  const handleNextWriting = () => {
    playClick();
    nextQuestion();
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
      {gameMode === "READING" && <Feedback isCorrect={feedbackState.isCorrect} />}

      {gameState === "START" && (
        <StartScreen onStart={handleStart} />
      )}

      {gameState === "PLAYING" && currentQuestion && gameMode === "READING" && (
        <QuizScreen
          question={currentQuestion}
          currentNumber={currentQuestionIndex + 1}
          totalNumber={totalQuestions}
          gameTime={gameTime}
          onAnswer={handleAnswer}
          onEndGame={endGame}

          isProcessing={feedbackState.show}
          onReport={handleReport}
        />
      )}

      {gameState === "PLAYING" && currentQuestion && gameMode === "WRITING" && (
        <WritingScreen
          question={currentQuestion}
          currentNumber={currentQuestionIndex + 1}
          gameTime={gameTime}
          onNext={handleNextWriting}
          onEndGame={endGame}
        />
      )}

      {gameState === "RESULT" && (
        <ResultScreen
          gameTime={gameTime}
          total={totalQuestions}
          onRestart={handleRestart}
          reportedQuestions={reportedQuestions}
        />
      )}
    </main>
  );
}

