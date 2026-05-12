'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizQuestion {
  id: string;
  question: string;
  answers: Answer[];
}

interface QuizRoomProps {
  quizData: {
    questions: QuizQuestion[];
    title: string;
    description: string;
  };
  correctAnswers: Record<string, string>;
  nextUrl: string;
  questType: 'celo' | 'ethereum';
}

export function QuizRoom({ quizData, correctAnswers, nextUrl, questType }: QuizRoomProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizData.questions.length - 1;

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Calculate score
      let correctCount = 0;
      Object.entries(selectedAnswers).forEach(([questionId, answerId]) => {
        if (correctAnswers[questionId] === answerId) {
          correctCount++;
        }
      });
      setScore((correctCount / quizData.questions.length) * 100);
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10 p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <div className="text-4xl font-bold text-cyan-400 mb-6">{Math.round(score)}%</div>
        <p className="mb-8">
          {score >= 70 
            ? "Great job! You've passed the quiz!"
            : "You didn't pass this time. Try again!"}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {score >= 70 ? (
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link href={nextUrl}>
                Continue Your Journey
              </Link>
            </Button>
          ) : (
            <Button onClick={handleRestart} className="bg-amber-600 hover:bg-amber-700 text-white">
              Try Again
            </Button>
          )}
          
          <Button variant="outline" asChild>
            <Link href="/quests">
              Back to Quests
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10 p-6 sm:p-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">{quizData.title}</h2>
        <p className="text-muted-foreground">{quizData.description}</p>
        <div className="mt-2 text-sm text-cyan-400">
          Question {currentQuestionIndex + 1} of {quizData.questions.length}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.answers.map((answer) => (
            <button
              key={answer.id}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                selectedAnswers[currentQuestion.id] === answer.id
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : 'border-muted-foreground/20 hover:border-cyan-500/50'
              }`}
              onClick={() => handleAnswerSelect(currentQuestion.id, answer.id)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-muted-foreground/20">
        <Button 
          variant="outline" 
          onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(prev => prev - 1)}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        
        <span className="text-sm text-muted-foreground">
          {currentQuestionIndex + 1} / {quizData.questions.length}
        </span>
        
        <Button 
          onClick={handleNextQuestion}
          disabled={!selectedAnswers[currentQuestion.id]}
          className="bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
