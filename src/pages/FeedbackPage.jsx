import useQuizStore from '../stores/useQuizStore';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const FeedbackPage = () => {
  const [showSummaryButton, setShowSummaryButton] = useState(false);
  const setQuizOver = useQuizStore((state) => state.setQuizOver);
  const answer = useQuizStore((state) => state.answers[state.currentQuestionIndex]);
  const isLastQuestion = useQuizStore((state) => state.isLastQuestion());
  const navigate = useNavigate();

  const onNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  

  const feedbackText = answer.isCorrect
    ? "That's correct!"
    : `Oops, you almost had it. The correct answer is: ${answer.question.options[answer.question.correctAnswerIndex]}`;

  useEffect(() => {
    if (isLastQuestion) {
      setShowSummaryButton(true);
      setQuizOver();
    } else {
      setShowSummaryButton(false);
    }
  }, [isLastQuestion, setQuizOver]);

  return (
    <div>
      <h1>Feedback</h1>
      <p>{feedbackText}</p>
      {showSummaryButton ? (
        <button onClick={() => navigate("/Summary")}>See your results!</button>
      ) : (
        <button onClick={onNextQuestion}>Next Question</button>
      )}
    </div>
  );
};