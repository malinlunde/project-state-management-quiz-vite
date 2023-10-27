import useQuizStore from '../stores/useQuizStore';
import { NextQuestion } from './NextQuestion';

export const FeedbackPage = () => {
  const answers = useQuizStore((state) => state.answers);
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const answer = answers[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  

  const feedbackText = answer.isCorrect
    ? "That's correct!"
    : `Oops, you almost had it. The correct answer is: ${answer.question.options[answer.question.correctAnswerIndex]}`;



  return (
    <div>
      <h1>Feedback</h1>
      <p>{feedbackText}</p>
      <NextQuestion showSammary={isLastQuestion}/>
    </div>
  );
};