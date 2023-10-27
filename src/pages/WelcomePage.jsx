import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
  const navigate = useNavigate();

  const onStartQuiz = () => {
    navigate('/quiz'); // Navigate to the question page
  };

  return (
    <div>
      <h1>Savvy Savor Quiz</h1>
      <p>Are you a real foodie? Tack the quiz to find out!</p>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};