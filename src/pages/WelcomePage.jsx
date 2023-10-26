import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
  const navigate = useNavigate();

  const onStartQuiz = () => {
    navigate('/quiz'); // Navigate to the question page
  };

  return (
    <div>
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};