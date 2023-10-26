import React from "react";
import useQuizStore from "../stores/useQuizStore";
import { useHistory } from "react-router-dom";

export function SummaryButton () {
    const quizOver = useQuizStore((state) => state.quizOver);
    console.log(quizOver);
    const history = useHistory();

    const goToSummary = () => {
        history.push("/summary");
    };
    return quizOver ? <button onClick={goToSummary}>See your results!</button> : null;
};