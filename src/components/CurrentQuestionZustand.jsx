import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly
import { NextQuestion } from "./NextQuestion";
import { RestartButton } from "./RestartButton";
import { SummaryButton } from "./SummaryButton";

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="managed-component">
      <h2>Using Zustand</h2>
      <h1>Question {question.id}/7: {question.questionText}</h1>

      <div className="options-container">
      {question.options.map((option)=>{
        return (
          <div className="option" key={option}>
          
         <label htmlFor={option}>
            <input type="radio" id={option} name={question.id} value={option}/>
          {option}</label>
        </div>

        )
      })}
   
        

      </div>
      <div className="btn-container">
        <NextQuestion />
        <RestartButton />
        <SummaryButton />

      </div>
    </div>
  );
};
