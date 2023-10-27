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
    : `Ooops! You almost got it right! The correct answer is: ${answer.question.options[answer.question.correctAnswerIndex]}`;



  return (
    <div className='feedback-wrapper'>
      <div className='answer-img'>
        <img className="circle-img" src={answer.question.imgURL} alt="Question Image" />
      </div>
      <p>{feedbackText}</p>
      <NextQuestion showSammary={isLastQuestion} />
    </div>
  );
};