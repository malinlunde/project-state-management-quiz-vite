
import { useState } from "react";
import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly
import { NextQuestion } from "./NextQuestion";
import { SubmitBtn } from "./SubmitBtn";
import { StartBtn } from "./StartBtn";
import { Summary } from "./Summary";
import { SummaryButton } from "./SummaryButton";


const Question = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const [answerIndex, setAnswerIndex] = useState(null)

  const currentQuestion = questions[currentQuestionIndex];

  const onChangeInput = (e) => {
    if(e.target.checked){
      console.log(e.target.value)
      setAnswerIndex(e.target.value)
    }
  }
  return (
    <div>
      <h2>Using Zustand</h2>
      <h1>Question {currentQuestion.id}/7: {currentQuestion.questionText}</h1>
      <div className="options-container">
        {currentQuestion.options.map((option, index)=>{
          return (
            <div className="option" key={option}>
        
            <label htmlFor={option}>
              <input type="radio" id={option} name={currentQuestion.id} value={index} onChange={onChangeInput}/>
              {option}</label>
            </div>
          )
        })}
      </div>
      <div className="btn-container">
        <SubmitBtn answerIndex={answerIndex} />
      </div>
    </div>
  )
}

const Answer = () => {

  return(
    <div>
      <div>
        Answer content and images, score, ...
      </div>
      <div>
        <NextQuestion />
      </div>
    </div>
  )

}

const Start = () => {

  return(
    <div>
      <div>
        Start page content,....
      </div>
      <div>
        <StartBtn />
      </div>
    </div>
  )

}


export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const quizOver = useQuizStore((state) => state.quizOver);
  const answers = useQuizStore((state) => state.answers);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const question = currentQuestionIndex != null ? questions[currentQuestionIndex] : null;
  const currentQuestionAnswer = currentQuestionIndex != null ? answers.find((a) => a.questionId === question.id) : null;




  return (
    <div className="managed-component">
      {(currentQuestionIndex != null && !currentQuestionAnswer && !quizOver) && <Question />}
      {(currentQuestionIndex != null && !!currentQuestionAnswer && !quizOver) && <Answer />}
      {currentQuestionIndex === null && <Start />}
      {quizOver && <Summary />}
    </div>
  );
};
