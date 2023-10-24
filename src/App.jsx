import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { QuizProvider } from "./context/QuizContext";

export const App = () => {
  return (
    <QuizProvider>
      <div>
        <CurrentQuestionZustand />
      </div>
    </QuizProvider>
  );
};
