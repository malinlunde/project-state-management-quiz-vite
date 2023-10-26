import useQuizStore from '../stores/useQuizStore';

export const WelcomePage = () => {
  const setStep = useQuizStore((state) => state.setStep);

  const onStartQuiz = () => {
    setStep(1); // Move to the question page
  };

  return (
    <div>
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};