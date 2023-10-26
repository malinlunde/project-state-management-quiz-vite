import useQuizStore from '../stores/useQuizStore';

export const FeedbackPage = () => {
  const answer = useQuizStore((state) => state.answers[state.currentQuestionIndex]);
  const isLastQuestion = useQuizStore((state) => state.isLastQuestion());

  const onNextQuestion = useQuizStore((state) => state.goToNextQuestion);
  const onSummary = useQuizStore((state) => state.quizOver);

  const feedbackText = answer.isCorrect
    ? "That's correct!"
    : `Oops, you almost had it. The correct answer is: ${answer.question.options[answer.question.correctAnswerIndex]}`;

  return (
    <div>
      <h1>Feedback</h1>
      <p>{feedbackText}</p>
      {isLastQuestion ? (
        <button onClick={onSummary}>Summary</button>
      ) : (
        <button onClick={onNextQuestion}>Next Question</button>
      )}
    </div>
  );
};