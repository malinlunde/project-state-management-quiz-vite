/* eslint-disable react/no-unescaped-entities */

import  { RestartButton } from "./RestartButton";
import useQuizStore from "../stores/useQuizStore";

export const Summary = () => {
    const answers = useQuizStore((state) => state.answers);
    const numberOfCorrectAnswers = answers.filter((answer) => answer.isCorrect).length;

    return (
        <div className="summary">
            <h2>Are you a quiz-master or what?</h2>
            <p>You've got {numberOfCorrectAnswers}/7 correct answers!</p>
            <p>Play again?</p>
            <RestartButton />
        </div>
    );
};